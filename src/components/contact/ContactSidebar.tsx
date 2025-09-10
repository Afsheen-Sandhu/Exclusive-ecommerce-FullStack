import React from "react";
import { Heading } from "../ui/headings";
import { Icon } from "../ui/icons";

export function ContactSidebar() {
  return (
    <aside className="w-full md:w-1/3 lg:w-1/3 flex flex-col gap-6 border border-base-200 bg-[var(--background)] p-6 lg:h-96">
      {/* Call Section */}
      <div className="flex flex-col gap-4 pb-6 border-b border-secondary">
        <div className="flex items-center gap-3">
          <Icon type="phone" setcolor="primary" size="md" />
          <Heading
            text="Call us"
            textClass="text-secondary text-lg sm:text-xl font-semibold"
            bulletClass="bg-secondary-content"
          />
        </div>
        <div className="text-sm sm:text-lg leading-relaxed">
          <p>We are available 24/7, 7 days a week.</p>
          <p className="font-medium">Phone: +8801611112222</p>
        </div>
      </div>

      {/* Chat Section */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Icon type="message" setcolor="primary" size="md" />
          <Heading
            text="Chat with us"
            textClass="text-secondary text-base sm:text-lg font-semibold"
            bulletClass="bg-secondary-content"
          />
        </div>
        <div className="text-base sm:text-lg leading-relaxed">
          <p>
            Fill out our form and we will contact{" "}
            <br className="hidden sm:block" />
            you within 24 hours.
          </p>
          <p className="font-sm">Email: customer@exclusive.com</p>
          <p className="font-sm">Support: support@exclusive.com</p>
        </div>
      </div>
    </aside>
  );
}
