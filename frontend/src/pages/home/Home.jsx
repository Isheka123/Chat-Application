import { useState } from "react";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar
        className={`w-full sm:w-1/4 md:w-1/5 lg:w-1/6 ${
          showContent ? "hidden sm:block" : ""
        }`}
        onSidebarItemClick={toggleContent}
      />
      <MessageContainer
        className={`w-full sm:w-3/4 md:w-4/5 lg:w-5/6 ${
          showContent ? "block" : "hidden"
        }`}
      />
    </div>
  );
};

export default Home;
