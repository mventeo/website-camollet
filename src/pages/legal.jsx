import { Footer } from '@/components/Footer'

export default function LegalPage() {
  return (
    <div>
      <main className="-mt-24 pb-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="sr-only">Page Title</h1>
          <section aria-labelledby="profile-overview-title">
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <h2 className="sr-only" id="profile-overview-title">
                Page Title
              </h2>
              <div className="bg-white p-6">
                <div className="sm:flex sm:items-center sm:justify-between">
                  <div className="sm:flex sm:space-x-5">
                    <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                      <p className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        Avís Legal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
