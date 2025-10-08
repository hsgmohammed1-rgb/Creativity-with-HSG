/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export const ar = {
  header: {
    language: "English",
  },
  startScreen: {
    title: "HSG ",
    titleHighlight: "لتعديل الصور",
    subtitle: "محرر الصور النهائي بالذكاء الاصطناعي. نقّح الصور، طبّق فلاتر إبداعية، وقم بإجراء تعديلات احترافية باستخدام أوامر نصية بسيطة.",
    uploadButton: "تحميل صورة",
    dropMessage: "أو اسحب وأفلت ملفًا",
    feature1Title: "تنقيح دقيق",
    feature1Desc: "انقر على أي نقطة في صورتك لإزالة الشوائب، تغيير الألوان، أو إضافة عناصر بدقة متناهية.",
    feature2Title: "فلاتر إبداعية",
    feature2Desc: "حوّل صورك بأنماط فنية. من الإطلالات الكلاسيكية إلى التوهجات المستقبلية، ابحث عن الفلتر المثالي أو أنشئه.",
    feature3Title: "تعديلات احترافية",
    feature3Desc: "حسّن الإضاءة، ضبّب الخلفيات، أو غيّر الحالة المزاجية. احصل على نتائج بجودة الاستوديو بدون أدوات معقدة.",
  },
  errors: {
    title: "حدث خطأ",
    tryAgain: "حاول مرة أخرى",
    noImageLoaded: "لم يتم تحميل صورة لتعديلها.",
    noPrompt: "الرجاء إدخال وصف لتعديلك.",
    noHotspot: "الرجاء النقر على الصورة لتحديد منطقة للتعديل.",
    failedToGenerate: "فشل في إنشاء الصورة.",
    noImageToFilter: "لم يتم تحميل صورة لتطبيق فلتر عليها.",
    failedToFilter: "فشل في تطبيق الفلتر.",
    noImageToAdjust: "لم يتم تحميل صورة لتطبيق تعديل عليها.",
    failedToAdjust: "فشل في تطبيق التعديل.",
    noCropSelection: "الرجاء تحديد منطقة للاقتصاص.",
    cropProcessError: "لم نتمكن من معالجة الاقتصاص.",
  },
  editor: {
    loadingMessage: "الذكاء الاصطناعي يمارس سحره...",
    tabs: {
      retouch: "تنقيح",
      adjust: "تعديل",
      filters: "فلاتر",
      crop: "اقتصاص",
    },
    retouch: {
      promptHelper: "رائع! الآن صف تعديلك المحدد أدناه.",
      promptHelperInitial: "انقر على منطقة في الصورة لإجراء تعديل دقيق.",
      placeholder: "مثال: 'غيّر لون قميصي إلى الأزرق'",
      placeholderInitial: "أولاً انقر على نقطة في الصورة",
      generateButton: "إنشاء",
    },
    crop: {
      title: "اقتصاص الصورة",
      subtitle: "انقر واسحب على الصورة لتحديد منطقة الاقتصاص.",
      aspectRatio: "نسبة العرض إلى الارتفاع:",
      applyButton: "تطبيق الاقتصاص",
    },
    adjustment: {
      title: "تطبيق تعديل احترافي",
      presets: {
        blur: "تضبيب الخلفية",
        enhance: "تحسين التفاصيل",
        warm: "إضاءة أدفأ",
        studio: "إضاءة استوديو",
      },
      placeholder: "أو صف تعديلاً (مثال: 'تغيير الخلفية إلى غابة')",
      applyButton: "تطبيق التعديل",
    },
    filter: {
      title: "تطبيق فلتر",
      presets: {
        synthwave: "سينث ويف",
        anime: "أنمي",
        lomo: "لومو",
        glitch: "خلل فني",
      },
      placeholder: "أو صف فلترًا مخصصًا (مثال: 'توهج سينث ويف الثمانينيات')",
      applyButton: "تطبيق الفلتر",
    },
    toolbar: {
      undo: "تراجع",
      redo: "إعادة",
      compare: "مقارنة",
      reset: "إعادة تعيين",
      uploadNew: "تحميل جديد",
      download: "تحميل الصورة",
    }
  },
};