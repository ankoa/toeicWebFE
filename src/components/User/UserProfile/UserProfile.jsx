import React, { useState } from "react";
import "./UserProfile.scss";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("courses"); // Tab mặc định
  const [isEditing, setIsEditing] = useState(false); // Trạng thái chỉnh sửa
  const [userInfo, setUserInfo] = useState({
    //thêm thông tin 
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "0123456789",
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Thực hiện lưu vào backend nếu cần
    console.log("Thông tin mới:", userInfo);
  };

  return (
    <div className="user-profile">
      <div className="cover-photo">
        <img
          src="https://storage.googleapis.com/a1aa/image/gJRV9shtD4KeRqAYanivewgGLebkAEHffgDGMMZPELeyBzz9E.jpg"
          alt="Cover"
        />
        <div className="profile-picture">
          <img
            src="https://storage.googleapis.com/a1aa/image/qY5nADnvUP7kHFEQl7ThdqcRPWIlhP3XdPsx3vkGyMQBzz9E.jpg"
            alt="Profile"
          />
        </div>
      </div>
      <div className="profile-info">
        <h1>name</h1>
        <p>Trang công khai</p>
      </div>
      <div className="tabs">
        <a
          href="#"
          className={activeTab === "courses" ? "active" : ""}
          onClick={() => handleTabChange("courses")}
        >
          Khoá học
        </a>
        <a
          href="#"
          className={activeTab === "results" ? "active" : ""}
          onClick={() => handleTabChange("results")}
        >
          Kết quả luyện thi
        </a>
        <a
          href="#"
          className={activeTab === "personalInfo" ? "active" : ""}
          onClick={() => handleTabChange("personalInfo")}
        >
          Thông tin cá nhân
        </a>
      </div>
      <div className="tab-content">
        {activeTab === "courses" && <div>Danh sách khoá học sẽ được hiển thị ở đây.</div>}
        {activeTab === "results" && <div>Kết quả luyện thi sẽ được hiển thị ở đây.</div>}

        {activeTab === "personalInfo" && (
          <div className="personal-info">
            <h2>Thông tin cá nhân</h2>
            {isEditing ? (
              <div className="edit-form">
                <div>
                  <label>Họ và Tên:</label>
                  <input
                    type="text"
                    name="name"
                    value={userInfo.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={userInfo.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label>Số điện thoại:</label>
                  <input
                    type="text"
                    name="phone"
                    value={userInfo.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <button onClick={handleSave}>Lưu</button>
              </div>
            ) : (
              <div>
                <p>
                  <strong>Họ và Tên:</strong> {userInfo.name}
                </p>
                <p>
                  <strong>Email:</strong> {userInfo.email}
                </p>
                <p>
                  <strong>Số điện thoại:</strong> {userInfo.phone}
                </p>
                <button onClick={handleEditClick}>Chỉnh sửa</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;