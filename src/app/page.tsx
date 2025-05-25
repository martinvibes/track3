"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Award,
  Coins,
  Github,
  Twitter,
  MessageCircle,
  Wallet2Icon,
} from "lucide-react";
import Link from "next/link";
import rocket from "../../public/rocket.svg";
import hero1 from "../../public/hero1.svg";
import hero2 from "../../public/hero2.svg";
import hero3 from "../../public/hero3.svg";
import play from "../../public/play.svg";
import boy1 from "../../public/boy1.svg";
import girl1 from "../../public/girl1.svg";
import logo_black from "../../public/logo_black.svg";
import int1 from "../../public/int1.svg";
import int2 from "../../public/int2.svg";
import int3 from "../../public/int3.svg";
import int4 from "../../public/int4.svg";
import int5 from "../../public/int5.svg";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6 md:px-16">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold">Track 3</span>
        </div>

        <div className="flex items-center gap-10">
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-white hover:text-[#9ca3af]">
              Features
            </Link>
            <Link href="#community" className="text-white hover:text-[#9ca3af]">
              Community
            </Link>
            <Link href="#docs" className="text-white hover:text-[#9ca3af]">
              Docs
            </Link>
          </nav>

          <Link href={"/dashboard"}>
            <Button
              variant="outline"
              className="bg-white text-black cursor-pointer flex rounded-full items-center border-white hover:bg-[#f3f4f6]"
            >
              <Image src={rocket} alt="Rocket Icon" />
              Launch App
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Track Time. Build Reputation. Earn On-Chain.
            </h1>
            <p className="text-xl text-[#9ca3af] mb-8 leading-relaxed">
              The first Web3 productivity platform that turns your work into
              soulbound NFTs and enables direct DAO payouts.
            </p>
            <div className="flex gap-4">
              <Link href={"/dashboard"}>
                <Button
                  size="lg"
                  className="bg-white text-black flex cursor-pointer rounded-full items-center hover:bg-[#f3f4f6]"
                >
                  <Image src={rocket} alt="Rocket Icon" />
                  Launch App
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-[#374151] bg-black border cursor-pointer rounded-full text-white"
              >
                See How It Works
              </Button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative">
            <Card className="bg-[#18212f] border-[#374151] p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white text-2xl font-semibold">
                  My Dashboard
                </h3>
                <Badge className="bg-[#1F2937] text-white">Connected</Badge>
              </div>

              <div className="space-y-4">
                <div className="bg-[#1F2937] p-2.5 rounded-lg">
                  <div className="flex justify-between text-sm my-1.5">
                    <span className="text-[#9ca3af]">{"Today's Time"}</span>
                    <span className="text-white">04:35:12</span>
                  </div>
                  <div className="w-full bg-[#374151] rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-3/4"></div>
                  </div>
                </div>

                <div className="bg-[#1F2937] p-3 rounded-lg">
                  <p className="text-base text-[#fff] mb-3">
                    Recent Reputation NFTs
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-[#374151] p-3 flex justify-center flex-col items-center rounded text-center">
                      <div className="bg-[#4b5563] mb-1 p-2 px-3 w-fit rounded text-center">
                        <Image
                          src={hero1}
                          alt="hero2 Icon"
                          className="w-6 h-6 mx-auto mb-1"
                        />
                      </div>
                      <div className="text-xs text-[#9ca3af]">Developer</div>
                    </div>
                    <div className="bg-[#374151] p-3 flex justify-center flex-col items-center rounded text-center">
                      <div className="bg-[#4b5563] mb-1 p-2 px-3 w-fit rounded text-center">
                        <Image
                          src={hero2}
                          alt="hero2 Icon"
                          className="w-6 h-6 mx-auto mb-1"
                        />
                      </div>
                      <div className="text-xs text-[#9ca3af]">Design</div>
                    </div>
                    <div className="bg-[#374151] p-3 flex mb-1 justify-center flex-col items-center rounded text-center">
                      <div className="bg-[#4b5563] p-2 px-3 w-fit rounded text-center">
                        <Image
                          src={hero3}
                          alt="hero2 Icon"
                          className="w-6 h-6 mx-auto mb-1"
                        />
                      </div>
                      <div className="text-xs text-[#9ca3af]">Marketing</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm text-[#9ca3af]">
                    Next payout: May 15, 2025
                  </span>
                  <Button
                    size="sm"
                    className="bg-white text-black cursor-pointer px-4 hover:bg-[#000] hover:text-white rounded-full"
                  >
                    Claim
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Powerful Web3 Productivity Tools
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-[#1f2937] border-[#374151] p-6">
            <Clock className="w-12 h-12 text-blue-500 mb-3" />
            <h3 className="text-xl font-semibold mb-3 text-white">
              Time Tracking
            </h3>
            <p className="text-[#9ca3af]">
              Track your work hours with precision across multiple projects and
              DAOs. Integration with popular web tools.
            </p>
          </Card>

          <Card className="bg-[#1f2937] border-[#374151] p-6">
            <Award className="w-12 h-12 text-purple-500 mb-3" />
            <h3 className="text-xl font-semibold mb-3 text-white">
              Soulbound Reputation
            </h3>
            <p className="text-[#9ca3af]">
              Earn reputation NFTs that build your on-chain work identity and
              showcase your expertise.
            </p>
          </Card>

          <Card className="bg-[#1f2937] border-[#374151] p-6">
            <Coins className="w-12 h-12 text-green-500 mb-3" />
            <h3 className="text-xl font-semibold mb-3 text-white">
              DAO Payouts
            </h3>
            <p className="text-[#9ca3af]">
              Receive automatic payments from DAOs based on your tracked work.
              Multiple token support with low gas fees.
            </p>
          </Card>
        </div>
      </section>

      {/* Video Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">See Track3 in Action</h2>
          <p className="text-xl text-[#9ca3af]">
            Watch how easy it is to track your time, earn reputation NFTs, and
            get paid through DAOs.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-[#374151] rounded-lg aspect-video flex flex-col items-center justify-center">
            <div className="">
              <Image
                src={play}
                alt="Play Video"
                className="w-16 h-16 cursor-pointer"
                onClick={() => {
                  // Logic to open video modal or redirect to video page
                  window.open(
                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                    "_blank"
                  );
                }}
              />
            </div>

            <span className="text-[#f3f4f6] mt-1.5">Watch Demo Video</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Trusted by Leading DAOs</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-[#1f2937] border-[#374151] p-8">
            <div className="flex items-center gap-4 mb-4">
              <Image src={boy1} alt="icon" className="w-12 h-12 rounded-full" />
              <div>
                <h4 className="font-semibold text-white">Alex Thompson</h4>
                <p className="text-sm text-[#9ca3af]">
                  Developer DAO Contributor
                </p>
              </div>
            </div>
            <p className="text-[#9ca3af]">
              {
                "Track3 transformed how our DAO manages contributor time. The reputation NFTs provide real incentives and the payment system is seamless."
              }
            </p>
          </Card>

          <Card className="bg-[#1f2937] border-[#374151] p-8">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={girl1}
                alt="icon"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold text-white">Maya Rodriguez</h4>
                <p className="text-sm text-[#9ca3af]">FriendDAO Coordinator</p>
              </div>
            </div>
            <p className="text-[#9ca3af]">
              {
                "Our contributors love the transparency and accountability. The soulbound NFTs have become a status symbol within our community."
              }
            </p>
          </Card>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-[#9ca3af] mb-8">
            Integrated with leading Web3 platforms
          </p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <span className="text-sm cursor-pointer p-2 rounded-lg bg-[#111827]">
              <Image src={int1} alt="Integration 1" className="w-8 h-8" />
            </span>
            <span className="text-sm cursor-pointer p-2 rounded-lg bg-[#111827]">
              <Image src={int2} alt="Integration 1" className="w-8 h-8" />
            </span>
            <span className="text-sm cursor-pointer p-2 rounded-lg bg-[#111827]">
              <Image src={int3} alt="Integration 1" className="w-8 h-8" />
            </span>
            <span className="text-sm cursor-pointer p-2 rounded-lg bg-[#111827]">
              <Image src={int4} alt="Integration 1" className="w-8 h-8" />
            </span>
            <span className="text-sm cursor-pointer p-2 rounded-lg bg-[#111827]">
              <Image src={int5} alt="Integration 1" className="w-8 h-8" />
            </span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=" bg-[#0c0f15]  px-6 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to build your work history on-chain?
          </h2>
          <p className="text-xl text-[#9ca3af] mb-8">
            Join thousands of Web3 contributors who are tracking time, building
            reputation, and getting paid seamlessly.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-white rounded-full flex items-center cursor-pointer text-black hover:bg-[#f3f4f6]"
            >
              <Wallet2Icon className="w-5 h-5" />
              Connect Wallet
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#374151] bg-black border cursor-pointer rounded-full text-white"
            >
              Join with Email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#374151] py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src={logo_black} alt="Track3 Logo" className="w-8 h-8" />
                <span className="text-xl font-semibold">Track3</span>
              </div>
              <p className="text-[#9ca3af] text-sm">
                The Web3 productivity platform for the future of work.
              </p>
              <div className="flex gap-4 mt-4">
                <Twitter className="w-5 h-5 text-[#9ca3af] hover:text-white cursor-pointer" />
                <Github className="w-5 h-5 text-[#9ca3af] hover:text-white cursor-pointer" />
                <MessageCircle className="w-5 h-5 text-[#9ca3af] hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <div className="space-y-2 text-sm text-[#9ca3af]">
                <div>Features</div>
                <div>Pricing</div>
                <div>Integrations</div>
                <div>API</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Resources</h4>
              <div className="space-y-2 text-sm text-[#9ca3af]">
                <div>Documentation</div>
                <div>Blog</div>
                <div>Guides</div>
                <div>Support</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <div className="space-y-2 text-sm text-[#9ca3af]">
                <div>About</div>
                <div>Team</div>
                <div>Careers</div>
                <div>Contact</div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#374151] mt-12 pt-8 flex justify-between items-center text-sm text-[#9ca3af]">
            <div>© 2024 Track3. All rights reserved.</div>
            <div className="flex gap-6">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookie Settings</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
