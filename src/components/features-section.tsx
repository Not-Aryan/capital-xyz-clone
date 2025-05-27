import React from 'react'
import Image from 'next/image'

export function FeaturesSection() {
  return (
    <section className="w-full py-20 dark-bg">
      <div className="capital-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h3 className="text-xl mb-2">Raise</h3>
            <div className="aspect-video rounded-lg bg-black/40 mb-6 overflow-hidden relative">
              <Image
                src="/feature1.jpg"
                alt="Raise feature"
                fill
                className="object-cover opacity-80"
                unoptimized
              />
            </div>
            <h4 className="text-lg text-white/70 mb-4">Automate the entire fundraising process from open to close</h4>
            <p className="text-white/60">
              Set the details of your round, generate a SAFE*, choose fiat or crypto (or both), invite investors,
              sign all documents, immediately send or spend funds from your new Capital account.
            </p>
            <p className="text-white/60 text-sm mt-4">* All rounds use the standard Y Combinator SAFE</p>
          </div>

          <div>
            <h3 className="text-xl mb-2">Invest</h3>
            <div className="aspect-video rounded-lg bg-black/40 mb-6 overflow-hidden relative">
              <Image
                src="/feature2.jpg"
                alt="Invest feature"
                fill
                className="object-cover opacity-80"
                unoptimized
              />
            </div>
            <h4 className="text-lg text-white/70 mb-4">Startup investing without all the XLS, PDF, and WTF that usually come with</h4>
            <p className="text-white/60">
              Receive a private invite to a round, choose the amount you'd like to invest, link your payment method
              (bank account, wire, or USDC wallet), and invest with a tap. All docs are signed automatically.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <div>
            <h3 className="text-xl mb-2">Earn</h3>
            <div className="aspect-video rounded-lg bg-black/40 mb-6 overflow-hidden relative">
              <Image
                src="/feature3.jpg"
                alt="Earn feature"
                fill
                className="object-cover opacity-80"
                unoptimized
              />
            </div>
            <h4 className="text-lg text-white/70 mb-4">Fund your account by raising on Capital or transferring funds from an existing external account</h4>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mt-20">
          <div>
            <h3 className="text-xl mb-2">Spend</h3>
            <div className="aspect-video rounded-lg bg-black/40 mb-6 overflow-hidden relative">
              <Image
                src="/feature4.jpg"
                alt="Spend feature"
                fill
                className="object-cover opacity-80"
                unoptimized
              />
            </div>
            <h4 className="text-lg text-white/70 mb-4">Activate a virtual debit card with just a tap to spend your funds anywhere</h4>
            <p className="text-white/60">
              Founders who use Capital can access their funds as soon as they hit their account.
              Add your card to ApplePay for faster mobile payment. Be careful, spending money has never been this easy.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-2">Send</h3>
            <div className="aspect-video rounded-lg bg-black/40 mb-6 overflow-hidden relative">
              <Image
                src="/feature5.jpg"
                alt="Send feature"
                fill
                className="object-cover opacity-80"
                unoptimized
              />
            </div>
            <h4 className="text-lg text-white/70 mb-4">Build trust with your partners by easily paying them from your Capital account</h4>
            <p className="text-white/60">
              Pay contractors and vendors with ease. Just enter the recipient's details to send domestic wires or ACH payments, all for free.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
