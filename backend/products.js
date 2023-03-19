const products = [
    {
        id: 1,
        name: "שייקר טין-טין - כסף",
        category: "bar",
        subCategory: "shaker",
        desc: "שייקר טין-טין בצבע כסף, עשוי מנירוסטה איכותית - משמש לשקשוק קוקטיילים",
        price: 89,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340746/e-commerce/shakers/PhotoRoom_20210817_222138-600x600_fjh3ph.png",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 2,
        name: "שייקר טין-טין - נחושת",
        category: "bar",
        subCategory: "shaker",
        desc: "שייקר טין-טין בצבע נחושת, עשוי מנירוסטה איכותית - משמש לשקשוק קוקטיילים",
        price: 99,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340746/e-commerce/shakers/1-1F221151252_kaciaf.jpg",
        isPopular: true,
        isAvailable: true
    },

    {
        id: 3,
        name: "שייקר טין-טין - שחור",
        category: "bar",
        subCategory: "shaker",
        desc: "שייקר טין-טין בצבע שחור, עשוי מנירוסטה איכותית - משמש לשקשוק קוקטיילים",
        price: 99,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340747/e-commerce/shakers/fa198ebff0a5636bad89711d42c18b05-1_lnw66d.jpg",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 4,
        name: "שייקר טין-טין - זהב",
        category: "bar",
        subCategory: "shaker",
        desc: "שייקר טין-טין בצבע זהב, עשוי מנירוסטה איכותית - משמש לשקשוק קוקטיילים",
        price: 99,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340746/e-commerce/shakers/sh-goldd-450x450_d54ano.png",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 5,
        name: "ג'יגר - 30/45 מ''ל",
        category: "bar",
        subCategory: "jiggers",
        desc: "ג'יגר 30/45 מ''ל בצבע כסף עם עיצוב מיוחד - משמש למדידת מנות האלכוהול והנוזלים ",
        price: 49,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340745/e-commerce/jiggers/%D7%92%D7%99%D7%92%D7%A8-%D7%9E%D7%99%D7%A1%D7%98%D7%A8-%D7%A1%D7%9C%D7%99%D7%9D-363x450_ihetm3.jpg",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 6,
        name: "ג'יגר - 30/60 מ''ל",
        category: "bar",
        subCategory: "jiggers",
        desc: "ג'יגר 30/60 מ''ל בצבע כסף  - משמש למדידת מנות האלכוהול והנוזלים ",
        price: 45,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340745/e-commerce/jiggers/tablecraft-30-60-ml-1-oz-2-oz-japanese-style-jigger-p13400-180250_zoom-450x450_iufd7f.jpg",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 7,
        name: "ג'יגר - 30/60 מ''ל",
        category: "bar",
        subCategory: "jiggers",
        desc: "ג'יגר 30/60 מ''ל בצבע זהב  - משמש למדידת מנות האלכוהול והנוזלים ",
        price: 55,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340745/e-commerce/jiggers/jig-goldd-450x450_rrrsx4.png",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 8,
        name: "ג'יגר - 30/60 מ''ל",
        category: "bar",
        subCategory: "jiggers",
        desc: "ג'יגר 30/60 מ''ל בצבע נחושת  - משמש למדידת מנות האלכוהול והנוזלים ",
        price: 55,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340745/e-commerce/jiggers/jig-goldd-450x450_rrrsx4.png",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 9,
        name: "ג'יגר - 30/60 מ''ל",
        category: "bar",
        subCategory: "jiggers",
        desc: "ג'יגר 30/60 מ''ל בצבע שחור  - משמש למדידת מנות האלכוהול והנוזלים ",
        price: 55,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340745/e-commerce/jiggers/jig-blackk-450x450_ehhc9k.png",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 10,
        name: "כותש עץ",
        category: "bar",
        subCategory: "muddlers",
        desc: "כותש עץ חזק במיוחד - משמש לכתישת מרכיבי הקוקטייל",
        price: 40,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340746/e-commerce/Muddlers/%D7%9B%D7%95%D7%AA%D7%A9-%D7%A2%D7%A5-450x450_ksbsbs.png",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 11,
        name: "כותש עץ",
        category: "bar",
        subCategory: "muddlers",
        desc: "כותש עץ חזק במיוחד - משמש לכתישת מרכיבי הקוקטייל",
        price: 45,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340746/e-commerce/Muddlers/mudd-450x450_lskjdc.png",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 12,
        name: "כותש נירוסטה",
        category: "bar",
        subCategory: "muddlers",
        desc: "כותש בצבע כסף עשוי מנירוסטה איכותית וחזקה במיוחד - משמש לכתישת מרכיבי הקוקטייל",
        price: 49,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340746/e-commerce/Muddlers/391c4647540b5e909f6e4fe3b971575e-e1627418902743-450x450_mtahxe.png",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 13,
        name: "כותש נירוסטה",
        category: "bar",
        subCategory: "muddlers",
        desc: "כותש בצבע נחושת עשוי מנירוסטה איכותית וחזקה במיוחד - משמש לכתישת מרכיבי הקוקטייל",
        price: 55,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340746/e-commerce/Muddlers/broze-450x450_yilolv.jpg",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 14,
        name: "כותש נירוסטה",
        category: "bar",
        subCategory: "muddlers",
        desc: "כותש בצבע שחור-מט עשוי מנירוסטה איכותית וחזקה במיוחד - משמש לכתישת מרכיבי הקוקטייל",
        price: 55,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340746/e-commerce/Muddlers/black-450x450_bvpwkb.jpg",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 15,
        name: "כותש נירוסטה",
        category: "bar",
        subCategory: "muddlers",
        desc: "כותש בצבע זהב עשוי מנירוסטה איכותית וחזקה במיוחד - משמש לכתישת מרכיבי הקוקטייל",
        price: 55,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340746/e-commerce/Muddlers/gold-450x450_ftvjtv.jpg",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 16,
        name: "כפית-בר",
        category: "bar",
        subCategory: "spoons",
        desc: "כפית-בר באורך 30 ס''מ בצבע כסף - משמשת לערבוב משקאות",
        price: 35,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340747/e-commerce/spoons/silver-spoonn-450x450_tac3xs.png",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 17,
        name: "כפית-בר",
        category: "bar",
        subCategory: "spoons",
        desc: "כפית-בר באורך 30 ס''מ בצבע זהב - משמשת לערבוב משקאות",
        price: 39,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340747/e-commerce/spoons/gold-spoonn-450x450_exemlg.png",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 18,
        name: "כפית-בר",
        category: "bar",
        subCategory: "spoons",
        desc: "כפית-בר באורך 30 ס''מ בצבע נחושת - משמשת לערבוב משקאות",
        price: 39,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340747/e-commerce/spoons/gold-rose-spoonn-450x450_hmf7qs.png",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 19,
        name: "כפית-בר",
        category: "bar",
        subCategory: "spoons",
        desc: "כפית-בר באורך 30 ס''מ בצבע שחור - משמשת לערבוב משקאות",
        price: 39,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340746/e-commerce/spoons/black-spoonn-450x450_h2gwx6.png",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 20,
        name: "מסננת-רשת",
        category: "bar",
        subCategory: "strainers",
        desc: "מסננת רשת בצבע כסף, - משמשת לסינון כפול של הנוזלים על מנת לקבל משקה נקי וחלק",
        price: 35,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340743/e-commerce/strainers/121-450x450_mn3zdd.jpg",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 21,
        name: "מסננת-רשת",
        category: "bar",
        subCategory: "strainers",
        desc: "מסננת רשת בצבע זהב, - משמשת לסינון כפול של הנוזלים על מנת לקבל משקה נקי וחלק",
        price: 39,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340744/e-commerce/strainers/reshetgold-450x450_blh0uw.png",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 22,
        name: "מסננת-רשת",
        category: "bar",
        subCategory: "strainers",
        desc: "מסננת רשת בצבע שחור, - משמשת לסינון כפול של הנוזלים על מנת לקבל משקה נקי וחלק",
        price: 39,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340744/e-commerce/strainers/reshetblackk-450x450_ydebwx.png",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 23,
        name: "מסננת-רשת",
        category: "bar",
        subCategory: "strainers",
        desc: "מסננת רשת בצבע נחושת, - משמשת לסינון כפול של הנוזלים על מנת לקבל משקה נקי וחלק",
        price: 39,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340743/e-commerce/strainers/brozereshett-450x450_azdmsh.png",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 24,
        name: "מסננת",
        category: "bar",
        subCategory: "strainers",
        desc: "מסננת לשייקר בצבע כסף, - משמשת לסינון הנוזלים מהשייקר",
        price: 59,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340744/e-commerce/strainers/silverstranierfastt-450x450_erkrpw.png",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 25,
        name: "מסננת",
        category: "bar",
        subCategory: "strainers",
        desc: "מסננת לשייקר בצבע זהב, - משמשת לסינון הנוזלים מהשייקר",
        price: 69,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340743/e-commerce/strainers/faststainergold-450x450_uzcih4.png",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 26,
        name: "מסננת",
        category: "bar",
        subCategory: "strainers",
        desc: "מסננת לשייקר בצבע נחושת, - משמשת לסינון הנוזלים מהשייקר",
        price: 69,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340743/e-commerce/strainers/bronzefaststrainerr-450x450_mkhidh.png",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 27,
        name: "מסננת",
        category: "bar",
        subCategory: "strainers",
        desc: "מסננת לשייקר בצבע שחור, - משמשת לסינון הנוזלים מהשייקר",
        price: 69,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340743/e-commerce/strainers/faststainerblackk-450x341_sywuvy.png",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 28,
        name: "מסננת",
        category: "bar",
        subCategory: "strainers",
        desc: "מסננת לשייקר בצבע כסף, - משמשת לסינון הנוזלים מהשייקר",
        price: 65,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340744/e-commerce/strainers/newstrsill_jqrrzf.png",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 29,
        name: "מסננת",
        category: "bar",
        subCategory: "strainers",
        desc: "מסננת לשייקר בצבע זהב, - משמשת לסינון הנוזלים מהשייקר",
        price: 79,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340743/e-commerce/strainers/newstrgoldd_whsr4u.png",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 30,
        name: "מסננת",
        category: "bar",
        subCategory: "strainers",
        desc: "מסננת לשייקר בצבע נחושת, - משמשת לסינון הנוזלים מהשייקר",
        price: 79,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340744/e-commerce/strainers/newstrbrr_sgs2rh.png",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 31,
        name: "מסננת",
        category: "bar",
        subCategory: "strainers",
        desc: "מסננת לשייקר בצבע שחור, - משמשת לסינון הנוזלים מהשייקר",
        price: 79,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340744/e-commerce/strainers/newstrblackk-450x445_zcgewo.png",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 32,
        name: "פינצטה",
        category: "bar",
        subCategory: "accessories",
        desc: " פינצטה באורך 30 ס''מ בצבע כסף - משמשת לעבודה סטרילית עם קישוטים ",
        price: 49,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340745/e-commerce/accessories/twiz-silver_jn4kmt.jpg",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 33,
        name: "פינצטה",
        category: "bar",
        subCategory: "accessories",
        desc: " פינצטה באורך 30 ס''מ בצבע זהב - משמשת לעבודה סטרילית עם קישוטים ",
        price: 55,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340744/e-commerce/accessories/twiz-goldd-450x450_bfev0d.png",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 34,
        name: "פינצטה",
        category: "bar",
        subCategory: "accessories",
        desc: " פינצטה באורך 30 ס''מ בצבע נחושת - משמשת לעבודה סטרילית עם קישוטים ",
        price: 55,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340744/e-commerce/accessories/twiz-rose-gold-450x450_txhnc3.jpg",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 35,
        name: "פינצטה",
        category: "bar",
        subCategory: "accessories",
        desc: " פינצטה באורך 30 ס''מ בצבע שחור - משמשת לעבודה סטרילית עם קישוטים ",
        price: 55,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340744/e-commerce/accessories/twiz-blackk-450x450_d6ibyy.png",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 36,
        name: "מסחטת לימונים",
        category: "bar",
        subCategory: "accessories",
        desc: "מסחטת לימונים עשויה מנירוסטה חזקה במיוחד - משמשת לסחיטת פירות הדר באופן מהיר",
        price: 49,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340745/e-commerce/accessories/WhatsApp-Image-2021-05-31-at-11.16.23-450x450_cq5jmu.jpg",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 37,
        name: "קולפן",
        category: "bar",
        subCategory: "accessories",
        desc: "קולפן קומפקטי וחזק ביוחד",
        price: 35,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340744/e-commerce/accessories/koll-450x450_ab1gjr.png",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 38,
        name: "כף-קרח",
        category: "bar",
        subCategory: "accessories",
        desc: "כף קרח עשויה מנירוסטה",
        price: 35,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340744/e-commerce/accessories/%D7%9B%D7%A3-%D7%A7%D7%A8%D7%97-437x450_dv8u6z.jpg",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 39,
        name: "פורר",
        category: "bar",
        subCategory: "accessories",
        desc: "פורר אוניברסלי בצבע כסף עשוי מנירוסטה איכותית במיוחד - משמש למזיגה מהירה של נוזלים ",
        price: 15,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340745/e-commerce/accessories/%D7%A4%D7%95%D7%A8%D7%A8-%D7%9B%D7%A1%D7%A3-450x392_hfcce9.png",
        isPopular: true,
        isAvailable: true
    },
    {
        id: 38,
        name: "פורר",
        category: "bar",
        subCategory: "accessories",
        desc: "פורר אוניברסלי בצבע נחושת עשוי מנירוסטה איכותית במיוחד - משמש למזיגה מהירה של נוזלים ",
        price: 19,
        image:
            "https://res.cloudinary.com/dldcacea5/image/upload/v1677340745/e-commerce/accessories/%D7%A4%D7%95%D7%A8%D7%A8-%D7%A0%D7%97%D7%95%D7%A9%D7%AA-450x393_srcrct.png",
        isPopular: true,
        isAvailable: true
    },
];

module.exports = products;