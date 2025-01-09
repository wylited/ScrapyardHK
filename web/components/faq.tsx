import { Card } from "@/components/ui/card"
import { useTranslation } from 'next-i18next';

export default function FAQ() {
  const { t } = useTranslation('common');

  const faqs = [
    {
      question: t("Eligibility"),
      answer: t("Anyone studying at a secondary school in Hong Kong is eligible to participate in our hackathon, ages 12-18 inclusive. We welcome all skill levels, from beginners to experts.")
    },
    {
      question: t("My parents are concerned"),
      answer: t("Our hackathon will be supervised by adults and professionals over the two days. Food and Safety procedures will be followed according to HKPC's guidelines.")
    },
    {
      question: t("What should I bring?"),
      answer: t("Please bring a laptop with its charger, a water bottle, some imagination and anything else you may require.")
    },
    {
      question: t("Do I need a team?"),
      answer: t("Not required, but highly encouraged! You can meet teammates at the event, too :) Teams are limited to 4 hackers.")
    },
    {
      question: t("Is this free?"),
      answer: t("Yep. Attending costs a grand total of $0. Zero. Nada. Nothing. From meals to mini-events and small prizes, our hackathon is universally accessible to all eligible HK teenagers.")
    },
    {
      question: t("Who's running this?"),
      answer: t("Our hackathon is organized by HK teenagers who have hosted other events like CodehersHK, ESF CoCo, Counterspell HK and more! We're part of a nonprofit organization whose mission is to foster a wholesome generation of coders, makers, founders and builders.")
    }
  ]

  return (
    <div className="container mx-auto py-6">
      <div className="grid gap-6 md:grid-cols-2">
        {faqs.map((faq, index) => (
          <Card
            key={index}
            className="p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 bg-white"
          >
            <h3 className="text-xl font-bold mb-3">
              {faq.question}
            </h3>
            <p className="text-gray-600">
              {faq.answer}
            </p>
          </Card>
        ))}
      </div>
    </div>
  )
}
