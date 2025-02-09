
---

# 🏡 Property Listing Application

This project is a **real estate property listing page** built with **Next.js 13 and TypeScript**. It provides an interactive and user-friendly interface to browse and filter properties, view property details, and sort listings based on different criteria.

---

## ✅ **Features Implemented**

### 🏠 **Property Listings Page**
- Displays a **grid of properties** with an image, address, size, number of bedrooms, price, and date added.
- **Click on a property** to view a **detailed page** for that property.

### 🔍 **Filtering & Sorting**
- **💰 Price Range:** Filter by **minimum & maximum price**.
- **🛏️ Bedrooms Filter:** Filter by **minimum number of bedrooms**.
- **📅 Sorting Options:**
  - **Most Recent** (default)
  - **Price: Low to High**
  - **Price: High to Low**
  - **Alphabetical Order** (Address A-Z)

### 🔎 **Search Functionality**


### 📱 **Responsive & Mobile-Friendly**
- **Adaptive layout** for desktop, tablet, and mobile.
- **Grid-based design** that adjusts to different screen sizes.

### 🎨 **Modern UI/UX Enhancements**
- **Company branding** centered at the top.
- **Catchy tagline** for engagement.
- **Expandable filter section** for a **cleaner UI**.
- **Next.js API routes** fetch property data dynamically.

### ⚡ **Extra Features Added**
- Users can **search properties by address**.
- Works seamlessly with **filters & sorting**.
- **Optimized API calls** for better performance.
- **Dark Mode Ready** via `next-themes` (future expansion).
- **Code follows best practices** – modular, reusable components.

---

## 🏗️ **Project Setup & Installation**

### 🔧 **Setup Instructions**
1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/property-listing.git
   cd property-listing
   ```
2. **Install Dependencies**
   ```sh
   npm install
   ```
3. **Run the Development Server**
   ```sh
   npm run dev
   ```
4. **Open in Browser**
   - Navigate to **[http://localhost:3000](http://localhost:3000)**.

---

## 📂 **Project Structure**

```
/app
  ├── layout.tsx         # Root layout
  ├── page.tsx           # Homepage (property listings)
  ├── property/[id]      # Property detail pages
/components
  ├── FilterSort.tsx     # Search & filter component
  ├── PropertyList.tsx   # Displays the list of properties
  ├── PropertyCard.tsx   # Individual property card
  ├── theme-provider.tsx # Handles dark/light theme
/lib
  ├── utils.ts           # Utility functions
/hooks                   
  ├── use-mobile.tsx     # Custom React hooks
  ├── use-toast.ts       # Custom React hooks
/api
  ├── properties/route.ts # API route for fetching property data
/data
  ├── properties.json     # Sample property data
/public
  ├── placeholder.svg     # Default image for missing property photos
  ├── favicon.ico        # Website favicon
```

---

## 🛠️ **Technologies Used**

| Technology        | Purpose |
|------------------|---------|
| **Next.js 13**  | Full-stack React framework with App Router |
| **TypeScript**  | Ensures type safety and scalability |
| **TailwindCSS** | Modern utility-based styling for responsiveness |
| **React Hooks** | `useState`, `useEffect`, `useSearchParams` for state management |
| **Next API Routes** | Handles property data dynamically |
| **JSON Data** | Simulates a backend for this project |

---

## 🚀 **Code Quality & Best Practices**

✅ **Strict TypeScript Usage**  
✅ **Component-based architecture** for reusability  
✅ **Clean, readable, and well-documented code**  
✅ **API handling with best performance optimizations**  
✅ **CSS utility classes for maintainability**  
✅ **SEO-friendly with optimized metadata**  

---

## 📈 **Future Enhancements & Next Steps**

🚀 **Planned Features**
1. **🖼️ Image Galleries** – Additional images for each property with a carousel.
2. **📍 Google Maps Integration** – Show property locations.
3. **💾 Backend Database** – Replace JSON with an actual backend.
4. **✨ User Authentication** – Allow users to save favorite listings.
5. **🔔 Notifications** – Email alerts for new listings.

---
