const cocktails = [
    {
        id: 39,
        name: "Espresso Martini",
        category: "cocktails",
        subCategory: "classic",
        desc: "קוקטייל קלאסי שנולד בסוף שנות ה-80 ומורכב מוודקה פרימיום, ליקר קפה, ואספרסו טרי",
        price: 69,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677593890/e-commerce/cocktails/Espresso_1056x1600_hipgx5.jpg",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 40,
        name: "Basil Smash",
        category: "cocktails",
        subCategory: "classic",
        desc: "קוקטייל קלאסי שנולד באמצע המאה ה-18 ומורכב מג'ין פרימיום, מיץ ליים טרי וסירופ בזיליקום ביתי",
        price: 65,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677593889/e-commerce/cocktails/Basil_1056x1600_xrza10.jpg",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 41,
        name: "Spicy Passion",
        category: "cocktails",
        subCategory: "home",
        desc: "קוקטייל חמצמץ עם חריפות עדינה - הקוקטייל מורכב מטקילה מיושנת, ליקר תפוזים פרימיום, מיץ ליים טרי ומיץ מפסיפלורה טרייה",
        price: 75,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677593890/e-commerce/cocktails/margarita_1056x1600_nlxbnc.jpg",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 42,
        name: "Citrus Breeze",
        category: "cocktails",
        subCategory: "home",
        desc: "קוקטייל מרענן והדרי עם מרירות עדינה - הקוקטייל מורכב מוודקה פרימיום, קמפרי, מיץ פירות הדר ביתי, ומחית מאננס טרי",
        price: 75,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677593889/e-commerce/cocktails/Citrus_1056x1600_m7czog.jpg",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 43,
        name: "Honey Twist",
        category: "cocktails",
        subCategory: "home",
        desc: "קוקטייל שנרקח ע''י המומחים שלנו, קוקטייל חמצמץ עם טעם מעושן שאי אפשר לשכוח - הקוקטייל מורכב מוויסקי סינגל מאלט מעושן, מיץ ליים טרי, וסירופ דבש-ג'ינג'ר ביתי",
        price: 75,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677593890/e-commerce/cocktails/Honey_1056x1600_xcqge2.jpg",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 44,
        name: "Coco Cabana ",
        category: "cocktails",
        subCategory: "home",
        desc: "קוקטייל שנרקח ע''י המומחים שלנו, קוקטייל מתקתק וטרופי - הקוקטייל מורכב מרום לבן מרום מיושן, ליקר קוקוס, מחית מאננס טרי, קרם קוקוס וסירופ דובדבנים-ליצ'י ביתי",
        price: 79,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677593889/e-commerce/cocktails/coco_1056x1600_dd3woi.jpg",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 45,
        name: "Negroni ",
        category: "cocktails",
        subCategory: "classic",
        desc:
            "קוקטייל קלאסי מפורסם שמגיע מאיטליה והוא מורכב משלושה רכיבים ביחסים שווים : קמפרי, וורמוט אדום וג'ין. באיטליה נהוג להוסיף מעט סודה כדי לעדן את המרירות",
        price: 79,
        image: "https://res.cloudinary.com/dldcacea5/image/upload/v1677593890/e-commerce/cocktails/Negroni_1056x1600_bdqjvt.jpg",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 46,
        name: "Daquiri ",
        category: "cocktails",
        subCategory: "classic",
        desc: "קוקטייל קלאסי המורכב מרום מיץ ליים טרי וסירופ סוכר, ניתן לערבל את הקוקטייל בבלנדר כדי לקבל דאקירי קפוא.",
        price: 79,
        image: "https://res.cloudinary.com/dldcacea5/image/upload/v1677593890/e-commerce/cocktails/Daquiri_1056x1600_z9oc2s.jpg",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 47,
        name: "Mojito ",
        category: "cocktails",
        subCategory: "classic",
        desc: "קוקטייל קלאסי שמגיע מקובה והוא מכיל רום בהיר, מיץ ליים טרי, נענע, מי סוכר, סודה ואנגוסטורה ביטרס",
        price: 79,
        image: "https://res.cloudinary.com/dldcacea5/image/upload/v1677593890/e-commerce/cocktails/mojito_1056x1600_mk60gs.jpg",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 48,
        name: "Cosmopolitan ",
        category: "cocktails",
        subCategory: "classic",
        desc: "קוקטייל קלאסי מוכר והוא מורכב מוודקה, ליקר תפוזים, מיץ ליים, מי סוכר וחמוציות",
        price: 79,
        image: "https://res.cloudinary.com/dldcacea5/image/upload/v1677593890/e-commerce/cocktails/Cosmopolitan_1056x1600_m3nzvx.jpg",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 49,
        name: "Caparinia ",
        category: "cocktails",
        subCategory: "classic",
        desc: "קוקטייל ברזילאי מאוד מפורסם והוא מכיל רום ברזיאלי ייחודי (קשאסה), מיץ ליים וסוכר",
        price: 79,
        image: "https://res.cloudinary.com/dldcacea5/image/upload/v1677593889/e-commerce/cocktails/caparinia_1056x1600_wshcir.jpg",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 50,
        name: "Italian Sour ",
        category: "cocktails",
        subCategory: "home",
        desc: " קוקטייל חמצמץ ועדין במיוחד - הקוקטייל מכיל ליקר שקדים, מיץ ליים טרי וסירופ וניל ביתי",
        price: 79,
        image: "https://res.cloudinary.com/dldcacea5/image/upload/v1677593889/e-commerce/cocktails/almond_1056x1600_yifp5m.jpg",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 51,
        name: "Bloody Berry ",
        category: "cocktails",
        subCategory: "home",
        desc: " קוקטייל מתקתק ופירותי - הקוקטייל מכיל ג'ין פרימיום, מיץ ליים טרי, מחית מתות טרי ומיץ רימונים",
        price: 79,
        image: "https://res.cloudinary.com/dldcacea5/image/upload/v1677593889/e-commerce/cocktails/bloody_1056x1600_abpjss.jpg",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 52,
        name: "Pear Fizz ",
        category: "cocktails",
        subCategory: "home",
        desc: " קוקטייל חמצמץ מוגז ומרענן - הקוקטייל מכיל וודקה אגסים, מיקס פירות הדר, ג'ינג'ר ביר ונענע",
        price: 79,
        image: "https://res.cloudinary.com/dldcacea5/image/upload/v1677593891/e-commerce/cocktails/pear_fizz_1056x1600_pd0zrz.jpg",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 53,
        name: "Pink Punch ",
        category: "cocktails",
        subCategory: "home",
        desc: " קוקטייל מתקתק ומרענן - הקוקטייל מכיל רום מיושן, מיץ ליים טרי, מחית מאננס טרי, חמוציות ופירות יער",
        price: 79,
        image: "https://res.cloudinary.com/dldcacea5/image/upload/v1677593891/e-commerce/cocktails/Pink_punch_1056x1600_benvw9.jpg",
        isPopular: true,
        isAvailable: true
    },

]

module.exports = cocktails;