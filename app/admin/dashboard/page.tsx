"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const router = useRouter();
  const [config, setConfig] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("general");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const adminAuth = localStorage.getItem("adminAuth");
    if (adminAuth !== "true") {
      router.push("/admin");
      return;
    }
    loadConfig();
  }, [router]);

  const loadConfig = async () => {
    try {
      const response = await fetch("/api/admin/config");
      const data = await response.json();
      setConfig(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to load config:", error);
      setLoading(false);
    }
  };

  const saveConfig = async () => {
    setSaving(true);
    try {
      const response = await fetch("/api/admin/config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config),
      });
      if (response.ok) {
        setMessage("✅ Changes saved successfully!");
        setTimeout(() => setMessage(""), 3000);
      }
    } catch (error) {
      setMessage("❌ Failed to save changes");
      setTimeout(() => setMessage(""), 3000);
    }
    setSaving(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    router.push("/admin");
  };

  const updateContent = (page: string, field: string, value: any) => {
    setConfig((prev: any) => ({
      ...prev,
      versions: prev.versions.map((v: any) =>
        v.id === "default"
          ? {
              ...v,
              content: {
                ...v.content,
                [page]: {
                  ...v.content[page],
                  [field]: value,
                },
              },
            }
          : v
      ),
    }));
  };

  const updateLetterBody = (index: number, value: string) => {
    setConfig((prev: any) => ({
      ...prev,
      versions: prev.versions.map((v: any) =>
        v.id === "default"
          ? {
              ...v,
              content: {
                ...v.content,
                heart2heart: {
                  ...v.content.heart2heart,
                  letter: {
                    ...v.content.heart2heart.letter,
                    body: v.content.heart2heart.letter.body.map((text: string, i: number) =>
                      i === index ? value : text
                    ),
                  },
                },
              },
            }
          : v
      ),
    }));
  };

  const updateFlowerMessage = (index: number, field: string, value: string) => {
    setConfig((prev: any) => ({
      ...prev,
      versions: prev.versions.map((v: any) =>
        v.id === "default"
          ? {
              ...v,
              content: {
                ...v.content,
                flowers: {
                  ...v.content.flowers,
                  messages: v.content.flowers.messages.map((msg: any, i: number) =>
                    i === index ? { ...msg, [field]: value } : msg
                  ),
                },
              },
            }
          : v
      ),
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 flex items-center justify-center">
        <div className="text-2xl text-pink-600">Loading...</div>
      </div>
    );
  }

  const activeVersion = config?.versions.find((v: any) => v.id === "default");

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">
                Admin Dashboard 🎛️
              </h1>
              <p className="text-gray-600">Manage your Valentine's website content</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={saveConfig}
                disabled={saving}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl 
                         font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 
                         disabled:opacity-50 disabled:cursor-not-allowed">
                {saving ? "Saving..." : "💾 Save Changes"}
              </button>
              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-xl 
                         font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                🚪 Logout
              </button>
            </div>
          </div>
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-green-100 border-2 border-green-400 rounded-xl text-green-700 font-bold">
              {message}
            </motion.div>
          )}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="flex flex-wrap border-b-2 border-pink-200">
            {[
              { id: "general", label: "⚙️ General", icon: "⚙️" },
              { id: "login", label: "🔐 Login Page", icon: "🔐" },
              { id: "question", label: "❓ Question", icon: "❓" },
              { id: "welcome", label: "🎉 Welcome", icon: "🎉" },
              { id: "forever", label: "📸 Photos", icon: "📸" },
              { id: "letter", label: "💌 Love Letter", icon: "💌" },
              { id: "flowers", label: "💐 Flowers", icon: "💐" },
              { id: "video", label: "🎥 Video", icon: "🎥" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 md:px-6 py-4 font-bold transition-all duration-300 flex-1 min-w-[120px]
                          ${
                            activeTab === tab.id
                              ? "bg-pink-500 text-white"
                              : "text-pink-600 hover:bg-pink-100"
                          }`}>
                <span className="hidden md:inline">{tab.label}</span>
                <span className="md:hidden text-2xl">{tab.icon}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          {/* General Settings */}
          {activeTab === "general" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-pink-600 mb-4">General Settings</h2>
              
              <div>
                <label className="block text-lg font-bold text-gray-700 mb-2">
                  Secret Word (for login)
                </label>
                <input
                  type="text"
                  value={config.secretWord}
                  onChange={(e) => setConfig({ ...config, secretWord: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-pink-300 rounded-xl focus:outline-none 
                           focus:border-pink-500 focus:ring-4 focus:ring-pink-200"
                  placeholder="e.g., forever"
                />
                <p className="text-sm text-gray-500 mt-2">
                  This is the word users need to enter to access the website
                </p>
              </div>

              <div>
                <label className="block text-lg font-bold text-gray-700 mb-2">
                  Admin Password
                </label>
                <input
                  type="password"
                  value={config.adminPassword}
                  onChange={(e) => setConfig({ ...config, adminPassword: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-pink-300 rounded-xl focus:outline-none 
                           focus:border-pink-500 focus:ring-4 focus:ring-pink-200"
                  placeholder="Enter new admin password"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Change your admin dashboard password
                </p>
              </div>
            </div>
          )}

          {/* Login Page */}
          {activeTab === "login" && activeVersion && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-pink-600 mb-4">Login Page Content</h2>
              
              <div>
                <label className="block text-lg font-bold text-gray-700 mb-2">Emoji</label>
                <input
                  type="text"
                  value={activeVersion.content.login.emoji}
                  onChange={(e) => updateContent("login", "emoji", e.target.value)}
                  className="w-full px-4 py-3 border-2 border-pink-300 rounded-xl focus:outline-none 
                           focus:border-pink-500 focus:ring-4 focus:ring-pink-200"
                />
              </div>

              <div>
                <label className="block text-lg font-bold text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={activeVersion.content.login.title}
                  onChange={(e) => updateContent("login", "title", e.target.value)}
                  className="w-full px-4 py-3 border-2 border-pink-300 rounded-xl focus:outline-none 
                           focus:border-pink-500 focus:ring-4 focus:ring-pink-200"
                />
              </div>

              <div>
                <label className="block text-lg font-bold text-gray-700 mb-2">Subtitle</label>
                <textarea
                  value={activeVersion.content.login.subtitle}
                  onChange={(e) => updateContent("login", "subtitle", e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-pink-300 rounded-xl focus:outline-none 
                           focus:border-pink-500 focus:ring-4 focus:ring-pink-200"
                />
              </div>
            </div>
          )}

          {/* Question Page */}
          {activeTab === "question" && activeVersion && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-pink-600 mb-4">Question Page Content</h2>
              
              <div>
                <label className="block text-lg font-bold text-gray-700 mb-2">Question Text</label>
                <input
                  type="text"
                  value={activeVersion.content.question.question}
                  onChange={(e) => updateContent("question", "question", e.target.value)}
                  className="w-full px-4 py-3 border-2 border-pink-300 rounded-xl focus:outline-none 
                           focus:border-pink-500 focus:ring-4 focus:ring-pink-200"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg font-bold text-gray-700 mb-2">Yes Button Text</label>
                  <input
                    type="text"
                    value={activeVersion.content.question.yesText}
                    onChange={(e) => updateContent("question", "yesText", e.target.value)}
                    className="w-full px-4 py-3 border-2 border-pink-300 rounded-xl focus:outline-none 
                             focus:border-pink-500 focus:ring-4 focus:ring-pink-200"
                  />
                </div>

                <div>
                  <label className="block text-lg font-bold text-gray-700 mb-2">No Button Text</label>
                  <input
                    type="text"
                    value={activeVersion.content.question.noText}
                    onChange={(e) => updateContent("question", "noText", e.target.value)}
                    className="w-full px-4 py-3 border-2 border-pink-300 rounded-xl focus:outline-none 
                             focus:border-pink-500 focus:ring-4 focus:ring-pink-200"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Welcome Page */}
          {activeTab === "welcome" && activeVersion && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-pink-600 mb-4">Welcome Page Content</h2>
              
              <div>
                <label className="block text-lg font-bold text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={activeVersion.content.welcome.title}
                  onChange={(e) => updateContent("welcome", "title", e.target.value)}
                  className="w-full px-4 py-3 border-2 border-pink-300 rounded-xl focus:outline-none 
                           focus:border-pink-500 focus:ring-4 focus:ring-pink-200"
                />
              </div>

              <div>
                <label className="block text-lg font-bold text-gray-700 mb-2">Message</label>
                <textarea
                  value={activeVersion.content.welcome.message}
                  onChange={(e) => updateContent("welcome", "message", e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-pink-300 rounded-xl focus:outline-none 
                           focus:border-pink-500 focus:ring-4 focus:ring-pink-200"
                />
              </div>

              <div>
                <label className="block text-lg font-bold text-gray-700 mb-2">Call to Action</label>
                <input
                  type="text"
                  value={activeVersion.content.welcome.callToAction}
                  onChange={(e) => updateContent("welcome", "callToAction", e.target.value)}
                  className="w-full px-4 py-3 border-2 border-pink-300 rounded-xl focus:outline-none 
                           focus:border-pink-500 focus:ring-4 focus:ring-pink-200"
                />
              </div>
            </div>
          )}

          {/* Photo Gallery */}
          {activeTab === "forever" && activeVersion && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-pink-600 mb-4">Photo Gallery</h2>
              
              <div>
                <label className="block text-lg font-bold text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={activeVersion.content.forever.title}
                  onChange={(e) => updateContent("forever", "title", e.target.value)}
                  className="w-full px-4 py-3 border-2 border-pink-300 rounded-xl focus:outline-none 
                           focus:border-pink-500 focus:ring-4 focus:ring-pink-200"
                />
              </div>

              <div>
                <label className="block text-lg font-bold text-gray-700 mb-2">
                  Image URLs (one per line)
                </label>
                <textarea
                  value={activeVersion.content.forever.images.join("\n")}
                  onChange={(e) =>
                    updateContent("forever", "images", e.target.value.split("\n").filter(Boolean))
                  }
                  rows={8}
                  className="w-full px-4 py-3 border-2 border-pink-300 rounded-xl focus:outline-none 
                           focus:border-pink-500 focus:ring-4 focus:ring-pink-200 font-mono text-sm"
                  placeholder="https://example.com/image1.jpg&#10;https://example.com/image2.jpg"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Enter Unsplash URLs or your own hosted images
                </p>
              </div>
            </div>
          )}

          {/* Love Letter */}
          {activeTab === "letter" && activeVersion && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-pink-600 mb-4">Love Letter Content</h2>
              
              <div>
                <label className="block text-lg font-bold text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={activeVersion.content.heart2heart.title}
                  onChange={(e) => updateContent("heart2heart", "title", e.target.value)}
                  className="w-full px-4 py-3 border-2 border-pink-300 rounded-xl focus:outline-none 
                           focus:border-pink-500 focus:ring-4 focus:ring-pink-200"
                />
              </div>

              <div>
                <label className="block text-lg font-bold text-gray-700 mb-2">Greeting</label>
                <input
                  type="text"
                  value={activeVersion.content.heart2heart.letter.greeting}
                  onChange={(e) =>
                    setConfig((prev: any) => ({
                      ...prev,
                      versions: prev.versions.map((v: any) =>
                        v.id === "default"
                          ? {
                              ...v,
                              content: {
                                ...v.content,
                                heart2heart: {
                                  ...v.content.heart2heart,
                                  letter: {
                                    ...v.content.heart2heart.letter,
                                    greeting: e.target.value,
                                  },
                                },
                              },
                            }
                          : v
                      ),
                    }))
                  }
                  className="w-full px-4 py-3 border-2 border-pink-300 rounded-xl focus:outline-none 
                           focus:border-pink-500 focus:ring-4 focus:ring-pink-200"
                />
              </div>

              <div>
                <label className="block text-lg font-bold text-gray-700 mb-4">Letter Paragraphs</label>
                {activeVersion.content.heart2heart.letter.body.map((paragraph: string, index: number) => (
                  <div key={index} className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600 mb-2">
                      Paragraph {index + 1}
                    </label>
                    <textarea
                      value={paragraph}
                      onChange={(e) => updateLetterBody(index, e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-pink-300 rounded-xl focus:outline-none 
                               focus:border-pink-500 focus:ring-4 focus:ring-pink-200"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-lg font-bold text-gray-700 mb-2">Signature</label>
                <input
                  type="text"
                  value={activeVersion.content.heart2heart.letter.signature}
                  onChange={(e) =>
                    setConfig((prev: any) => ({
                      ...prev,
                      versions: prev.versions.map((v: any) =>
                        v.id === "default"
                          ? {
                              ...v,
                              content: {
                                ...v.content,
                                heart2heart: {
                                  ...v.content.heart2heart,
                                  letter: {
                                    ...v.content.heart2heart.letter,
                                    signature: e.target.value,
                                  },
                                },
                              },
                            }
                          : v
                      ),
                    }))
                  }
                  className="w-full px-4 py-3 border-2 border-pink-300 rounded-xl focus:outline-none 
                           focus:border-pink-500 focus:ring-4 focus:ring-pink-200"
                />
              </div>
            </div>
          )}

          {/* Flowers Page */}
          {activeTab === "flowers" && activeVersion && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-pink-600 mb-4">Flowers Page Content</h2>
              
              <div>
                <label className="block text-lg font-bold text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={activeVersion.content.flowers.title}
                  onChange={(e) => updateContent("flowers", "title", e.target.value)}
                  className="w-full px-4 py-3 border-2 border-pink-300 rounded-xl focus:outline-none 
                           focus:border-pink-500 focus:ring-4 focus:ring-pink-200"
                />
              </div>

              <div>
                <label className="block text-lg font-bold text-gray-700 mb-4">Love Messages</label>
                {activeVersion.content.flowers.messages.map((message: any, index: number) => (
                  <div key={index} className="mb-4 p-4 border-2 border-pink-200 rounded-xl">
                    <label className="block text-sm font-semibold text-gray-600 mb-2">
                      Message {index + 1}
                    </label>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Emoji</label>
                        <input
                          type="text"
                          value={message.emoji}
                          onChange={(e) => updateFlowerMessage(index, "emoji", e.target.value)}
                          className="w-full px-3 py-2 border-2 border-pink-300 rounded-lg focus:outline-none 
                                   focus:border-pink-500"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label className="block text-xs text-gray-500 mb-1">Message Text</label>
                        <input
                          type="text"
                          value={message.text}
                          onChange={(e) => updateFlowerMessage(index, "text", e.target.value)}
                          className="w-full px-3 py-2 border-2 border-pink-300 rounded-lg focus:outline-none 
                                   focus:border-pink-500"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Video Page */}
          {activeTab === "video" && activeVersion && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-pink-600 mb-4">Video Page Content</h2>
              
              <div>
                <label className="block text-lg font-bold text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={activeVersion.content.video.title}
                  onChange={(e) => updateContent("video", "title", e.target.value)}
                  className="w-full px-4 py-3 border-2 border-pink-300 rounded-xl focus:outline-none 
                           focus:border-pink-500 focus:ring-4 focus:ring-pink-200"
                />
              </div>

              <div>
                <label className="block text-lg font-bold text-gray-700 mb-4">Overlay Messages</label>
                {activeVersion.content.video.messages.map((message: string, index: number) => (
                  <div key={index} className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600 mb-2">
                      Message {index + 1}
                    </label>
                    <input
                      type="text"
                      value={message}
                      onChange={(e) =>
                        setConfig((prev: any) => ({
                          ...prev,
                          versions: prev.versions.map((v: any) =>
                            v.id === "default"
                              ? {
                                  ...v,
                                  content: {
                                    ...v.content,
                                    video: {
                                      ...v.content.video,
                                      messages: v.content.video.messages.map((msg: string, i: number) =>
                                        i === index ? e.target.value : msg
                                      ),
                                    },
                                  },
                                }
                              : v
                          ),
                        }))
                      }
                      className="w-full px-4 py-3 border-2 border-pink-300 rounded-xl focus:outline-none 
                               focus:border-pink-500 focus:ring-4 focus:ring-pink-200"
                    />
                  </div>
                ))}
              </div>

              <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-xl">
                <p className="text-blue-800">
                  <strong>Note:</strong> To change the video file, replace{" "}
                  <code className="bg-blue-200 px-2 py-1 rounded">public/video.mp4</code> with your new video file.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
