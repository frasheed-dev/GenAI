import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function MainArticle({ articles }) {
  const theme = useSelector((state) => state.theme);
  const isDark = theme === "dark";

  if (articles.length === 0 || !articles) return null;

  const mainArticle = articles[0];
  const sideArticles = articles.slice(1, 5);

  return (
    <div className={`px-4 py-8 md:py-12 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto">
     

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Article - Left Side */}
          <div className="lg:w-2/3">
            <div className={`rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.01] ${isDark ? "bg-gray-800" : "bg-white"}`}>
              {/* Image Container */}
              <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 ">
                {mainArticle.image_url ? (
                  <img
                    src={mainArticle.image_url}
                    alt="article cover image"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <p className={`text-2xl md:text-3xl font-bold text-center ${isDark ? "text-white" : "text-white"} leading-tight`}>
                      {mainArticle.keywords.split(" ").slice(0, 8).join(" ")}
                    </p>
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${isDark ? "bg-black/70 text-white" : "bg-white/90 text-gray-800"}`}>
                    Featured
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  <span className={`text-sm font-medium ${isDark ? "text-blue-400" : "text-blue-600"}`}>
                    {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                  </span>
                </div>
                
                <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                  {mainArticle.title}
                </h1>

                <p className={`text-lg mb-6 ${isDark ? "text-gray-300" : "text-gray-600"} leading-relaxed`}>
                  {mainArticle.previewText.slice(0, 300)}...
                </p>

                <div className="flex items-center justify-between mt-8">
                  <NavLink to={`/Articles/${mainArticle._id}`}>
                    <button className={`group px-8 py-3 rounded font-semibold transition-all duration-300 ${
                      isDark 
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white" 
                        : "bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900  hover:to-purple-600 text-white"
                    }`}>
                      <span className="flex items-center gap-2 rounded-2xl">
                        Read Full Article
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          {/* Side Articles - Right Grid */}
          <div className="lg:w-1/3">
            <div className="sticky top-6">
              <h3 className={`text-xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
                More to Explore
              </h3>
              
              <div className="space-y-6">
                {sideArticles.map((article, index) => (
                  <NavLink key={article._id} to={`/Articles/${article._id}`}>
                    <div className={`group rounded-xl p-5 transition-all duration-300 hover:shadow-lg ${
                      isDark 
                        ? "bg-gray-800 hover:bg-gray-700" 
                        : "bg-white hover:bg-gray-50 border border-gray-100"
                    }`}>
                      <div className="flex items-start gap-4">
                        {/* Number Indicator */}
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          isDark 
                            ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white" 
                            : "bg-gradient-to-br from-blue-100 to-purple-100 text-blue-700"
                        }`}>
                          {index + 1}
                        </div>
                        
                        <div className="flex-1">
                          <h4 className={`font-bold mb-2 group-hover:text-blue-500 transition-colors ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}>
                            {article.title.split(" ").slice(0, 8).join(" ")}...
                          </h4>
                          <p className={`text-sm mb-3 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                            {article.previewText.split(" ").slice(0, 15).join(" ")}...
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <span className={`text-xs font-medium px-2 py-1 rounded ${
                              isDark ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"
                            }`}>
                              Read more
                            </span>
                            <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" 
                                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                ))}
              </div>

       
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainArticle;