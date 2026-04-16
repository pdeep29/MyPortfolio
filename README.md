# 🚀 Portfolio Website (React + Tailwind CSS)

A modern, responsive portfolio website built using **React**, **Tailwind CSS**, and reusable UI components. This project showcases projects, experience, and contact details with a clean and professional design.

---

## 📸 Features

* 🔥 Modern Hero Section with profile image
* 📱 Fully Responsive Design (Mobile + Tablet + Desktop)
* 💼 Projects Section (Featured + Other Projects)
* 🧑‍💻 Work Experience Timeline
* 📬 Contact Section (Optional Form / Info Toggle)
* 🌙 Dark Mode Support
* ⚡ Smooth animations and transitions

---

## 🛠️ Tech Stack

* React.js
* Tailwind CSS
* Lucide Icons (UI icons)
* Custom SVG Icons (for brand icons like LinkedIn)

---

## 📁 Project Structure

```
src/
 ├── components/
 │   ├── Hero.jsx
 │   ├── Projects.jsx
 │   ├── Experience.jsx
 │   ├── Contact.jsx
 │   └── ui/
 ├── data/
 │   └── mock.js
 ├── hooks/
 │   └── use-toast.js
 ├── App.js
 └── index.js
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone <your-repo-url>
cd portfolio
```

### 2. Install dependencies

```
npm install
```

### 3. Run the project

```
npm start
```

App will run on:

```
http://localhost:3000
```

---

## 🖼️ Adding Profile Image

1. Place your image inside:

```
public/profile.jpg
```

2. Use in code:

```
<img src="/profile.jpg" />
```

---

## 🔧 Configuration

### Personal Info

Update your details in:

```
src/data/mock.js
```

Example:

```
export const personalInfo = {
  name: "Your Name",
  title: "React Native Developer",
  email: "your@email.com",
  phone: "+91-XXXXXXXXXX",
  location: "India",
  linkedin: "https://linkedin.com/in/yourprofile"
};
```

---

## 📬 Contact Form (Optional)

Currently, form submission shows a toast message.

To enable email sending:

* Integrate EmailJS OR
* Use backend (Node.js + Nodemailer)

---

## 🔀 Toggle Contact Form

You can enable/disable form using:

```
const showForm = true;
```

* `true` → Show form + contact info
* `false` → Show only centered contact info

---

## ⚠️ Known Issues & Fixes

### 1. Icons not working (Lucide v1)

Brand icons like LinkedIn are removed.

✅ Solution:

* Use custom SVG
* OR use react-icons

---

### 2. CSS not loading

Ensure Tailwind is properly configured:

* `tailwind.config.js`
* `index.css` includes:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🚀 Build for Production

```
npm run build
```

---

## 📦 Deployment

You can deploy on:

* Netlify
* Vercel
* Firebase Hosting

---

## 💡 Future Improvements

* Add animations (Framer Motion)
* Add blog section
* Add backend contact API
* Convert to React Native (Expo)

---

## 👨‍💻 Author

Deep Patel

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
