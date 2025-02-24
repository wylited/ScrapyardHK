"use client"

import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Card } from "@/components/ui/card"
import { Download, Mail, Trophy } from "lucide-react"
import { motion } from "framer-motion"

export default function Sponsors() {
    const sponsorTiers = [
        {
            name: "Partner",
            color: "bg-gradient-to-r from-blue-500 to-cyan-400",
            textColor: "text-blue-400",
            borderColor: "border-blue-500/20",
            icon: <Trophy className="h-6 w-6" />,
            sponsors: [
                { name: "HKPS", logo: "/hkps.svg" },
            ],
        },
        {
            name: "Gold",
            color: "bg-gradient-to-r from-amber-500 to-amber-300",
            textColor: "text-amber-400",
            borderColor: "border-amber-500/20",
            icon: <Trophy className="h-6 w-6" />,
            sponsors: [
                { name: "BSD Education", logo: "/bsd.png" },
            ],
        },
        {
            name: "In Kind",
            color: "bg-gradient-to-r from-purple-500 to-pink-400",
            textColor: "text-purple-400",
            borderColor: "border-purple-500/20",
            icon: <Trophy className="h-6 w-6" />,
            sponsors: [
                { name: "Cobo Academy", logo: "/cobo.png" },
            ],
        },
    ]

    return (
        <div className="min-h-screen bg-[#212121] text-white font-phantom">
            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Our Sponsors
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        We're proud to partner with industry leaders who share our vision for innovation and excellence.
                    </p>
                </motion.div>

                {/* Sponsor Tiers */}
                <div className="space-y-16 justify-center">
                    {sponsorTiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="flex items-center justify-center gap-4 mb-8">
                                <div className={`p-2 rounded-lg ${tier.color}`}>{tier.icon}</div>
                                <h2 className={`text-2xl font-bold ${tier.textColor}`}>{tier.name}</h2>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                {tier.sponsors.map((sponsor, sponsorIndex) => (
                                    <motion.div
                                        key={sponsor.name}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: sponsorIndex * 0.1 }}
                                    >
                                        <Card
                                            className={`p-6 bg-[#212121]/50 backdrop-blur-sm border ${tier.borderColor} hover:border-white/20 transition-colors group`}
                                        >
                                            <div className="aspect-[3/1] relative mb-4 bg-[#212121]/30 rounded-lg overflow-hidden">
                                                <img
                                                    src={sponsor.logo || "/placeholder.svg"}
                                                    alt={sponsor.name}
                                                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <h3 className="text-2xl font-semibold text-gray-200 group-hover:text-white transition-colors justify-center item-center text-center">
                                                {sponsor.name}
                                            </h3>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-24 text-center"
                >
                    <Card className="p-8 bg-gradient-to-b from-[#111111] to-[#212121] border-[#111111]">
                        <h2 className="text-gray-200 text-2xl md:text-3xl font-bold mb-4">Become a Sponsor</h2>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            Join us in shaping the future of technology. Download our prospectus to learn about sponsorship
                            opportunities.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-white text-black hover:bg-gray-200"
                                onClick={() => window.open('/prospectus.pdf', '_blank')}
                            >
                                View Prospectus
                            </Button>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline"
                                            onClick={() => window.location.href = 'mailto:admin@scrapyard.hk'}
                                        >
                                            <Mail className="mr-2 h-4 w-4" />
                                            Contact Us
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent className="bg-gray-600 text-white">
                                        <p>Email us at admin@scrapyard.hk</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}

