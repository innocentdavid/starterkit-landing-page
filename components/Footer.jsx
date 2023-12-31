import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className="border-t border-[#333338]">
      <div className="max-w-[960px] mx-auto h-[60px] flex items-center justify-between px-4">
        <span className="text-[.875rem] text-[#D4D4D4]">
          © {/* */}2023{/* */} Liveblocks Inc.
        </span>

        <Link href="#" className="flex items-center gap-2" target="_blank">
          <span className="Button_icon__V_a2N">
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 1C4.133 1 1 4.126 1 7.985a6.98 6.98 0 0 0 4.787 6.628c.35.06.48-.149.48-.332 0-.166-.009-.716-.009-1.3-1.758.321-2.213-.43-2.353-.822-.08-.201-.42-.822-.717-.987-.246-.131-.596-.455-.01-.463.552-.009.945.506 1.077.716.63 1.056 1.637.76 2.038.576.062-.454.245-.76.447-.934-1.558-.175-3.185-.777-3.185-3.449 0-.76.27-1.389.717-1.878-.07-.174-.315-.89.07-1.85 0 0 .586-.184 1.926.715a6.508 6.508 0 0 1 1.75-.235c.595 0 1.19.079 1.75.235 1.338-.908 1.925-.715 1.925-.715.385.96.14 1.676.07 1.85.445.49.717 1.11.717 1.878 0 2.68-1.636 3.274-3.193 3.449.253.218.472.638.472 1.292 0 .935-.009 1.686-.009 1.921 0 .184.132.402.482.332A6.996 6.996 0 0 0 15 7.985C15 4.126 11.867 1 8 1Z"
                fill="currentColor"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </span>
          <span className="text-[.875rem] text-[#D4D4D4]">View on GitHub</span>
        </Link>
      </div>
    </div>
  );
}
