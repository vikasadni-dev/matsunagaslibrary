import { Toaster } from "@/Components/ui/toaster";
import { Head } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function AppLayout({ title, children }) {
  return (
    <div>
      <Head title={title} />
      <Toaster position="top-center" richColors />

      <div className="flex flex-row w-full min-h-screen">
        <div className="hidden w-1/5 border-r lg:block">
          <div className="flex flex-col h-full min-h-screen gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <ApplicationLogo />
            </div>
            <div className="flex-1">
              {/* sidebar */}
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-4/5">
          {children}
        </div>
      </div>
    </div>
  )
}
