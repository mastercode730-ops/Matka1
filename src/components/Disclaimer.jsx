import React from "react";
import { SITE_NAME, SITE_DOMAIN, WHATSAPP_NUMBER } from "../constants";

export default function Disclaimer({ onBack }) {
  return (
    <div className="legal-page-container">
      <div className="legal-header">
        <button onClick={onBack} className="legal-back-btn">
          ← वापस होम पर जाएं (Back to Home)
        </button>
        <h1 className="legal-title">Disclaimer / अस्वीकरण</h1>
        <p className="legal-subtitle">
          महत्वपूर्ण सूचना एवं वैधानिक चेतावनी (Important Notice &amp; Legal Advisory)
        </p>
      </div>

      <div className="legal-card">
        <div className="legal-warning-box">
          <span className="warning-icon">⚠️</span>
          <div>
            <strong>18+ केवल सूचनात्मक उद्देश्य (18+ Informational Purpose Only)</strong>
            <p>
              यदि आपके राज्य या देश में मटका / सट्टा या किसी भी प्रकार का जुआ अवैध या प्रतिबंधित है, तो तुरंत इस वेबसाइट से बाहर निकल जाएं।
            </p>
          </div>
        </div>

        <section className="legal-section">
          <h2>1. केवल सूचना एवं मनोरंजन हेतु (Informational Purposes Only)</h2>
          <p>
            <strong>{SITE_NAME}</strong> (<a href={`https://${SITE_DOMAIN}`} target="_blank" rel="noopener noreferrer">{SITE_DOMAIN}</a>) पर प्रदर्शित सभी परिणाम, पुराने रिकॉर्ड चार्ट, विश्लेषण एवं अनुमानित अंक केवल इंटरनेट पर उपलब्ध सार्वजनिक स्रोतों से एकत्रित की गई जानकारी के आधार पर दर्शकों के मनोरंजन एवं सूचनात्मक संदर्भ हेतु दिखाए जाते हैं।
          </p>
          <p>
            यह वेबसाइट किसी भी प्रकार के अवैध सट्टा मटका गेम का संचालन, प्रचार या समर्थन नहीं करती है। हमारा किसी भी मटका कंपनी या सट्टा ऑपरेटर से कोई सीधा या अप्रत्यक्ष संबंध नहीं है।
          </p>
        </section>

        <section className="legal-section">
          <h2>2. कोई वित्तीय सलाह या गारंटी नहीं (No Financial Advice or Guarantee)</h2>
          <p>
            वेबसाइट पर प्रकाशित कोई भी अनुमान (guessing), टिप्स, लकी नंबर या रिकॉर्ड्स किसी भी प्रकार के वित्तीय लाभ अथवा सटीक परिणाम की गारंटी नहीं देते हैं। किसी भी प्रकार के वित्तीय लेन-देन, लाभ या हानि के लिए उपयोगकर्ता स्वयं पूर्णतः जिम्मेदार होंगे।
          </p>
          <p>
            हम कभी भी किसी भी उपयोगकर्ता से लीक नंबर या गेम के नाम पर पैसों की मांग नहीं करते हैं। कृपया किसी भी धोखाधड़ी या ठगी से सावधान रहें।
          </p>
        </section>

        <section className="legal-section">
          <h2>3. कानूनी अनुपालन (Compliance with Local Laws)</h2>
          <p>
            सट्टा, जुआ या लॉटरी खेलना भारत के कई राज्यों एवं अन्य देशों में कानूनन अपराध हो सकता है (जैसे The Public Gambling Act, 1867 एवं संबंधित राज्य अधिनियम)।
          </p>
          <p>
            हम सभी लागू राष्ट्रीय एवं स्थानीय कानूनों का पूर्ण सम्मान करते हैं। यदि आपके क्षेत्र में ऐसी वेबसाइटों को देखना या ऐसी गतिविधियों में शामिल होना कानून द्वारा निषिद्ध है, तो आपको इस वेबसाइट का उपयोग करने की अनुमति नहीं है।
          </p>
        </section>

        <section className="legal-section">
          <h2>4. बाहरी लिंक एवं विज्ञापनदाता (Third-Party Advertisements)</h2>
          <p>
            वेबसाइट पर प्रदर्शित विभिन्न विज्ञापन, बैनर, व्हाट्सएप या टेलीग्राम लिंक बाहरी विज्ञापनदाताओं द्वारा दिए गए हैं। उन लिंक पर जाने या उनसे संपर्क करने पर होने वाले किसी भी लेन-देन, सौदे या परिणाम के लिए {SITE_NAME} जिम्मेदार नहीं होगी। अपने विवेक का प्रयोग करें।
          </p>
        </section>

        <section className="legal-section">
          <h2>5. डेटा एवं परिणामों की सटीकता (Accuracy of Information)</h2>
          <p>
            यद्यपि हम सही और समय पर परिणाम उपलब्ध कराने का प्रयास करते हैं, फिर भी किसी तकनीकी त्रुटि, सर्वर समस्या या मानवीय भूल के कारण प्रदर्शित परिणाम में भिन्नता हो सकती है। किसी भी निर्णय से पहले आधिकारिक स्रोतों से पुष्टि करें।
          </p>
        </section>

        <section className="legal-section">
          <h2>6. संपर्क सूत्र (Contact)</h2>
          <p>
            यदि आपको सामग्री या कॉपीराइट से संबंधित कोई आपत्ति या प्रश्न है, तो आप हमारी सहायता हेल्पलाइन <strong>{WHATSAPP_NUMBER}</strong> पर संपर्क कर सकते हैं।
          </p>
        </section>

        <div className="legal-actions">
          <button onClick={onBack} className="wave-btn">
            ← वापस मुख्य पृष्ठ (Return to Landing Page)
          </button>
        </div>
      </div>
    </div>
  );
}
