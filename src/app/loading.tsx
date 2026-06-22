import loadingIcon from "@/public/LoadingLogo.png";
import Image from "next/image";

export default function Loading() {
    return (
        <div className="flex flex-col gap-6 items-center justify-center min-h-screen bg-bg">
            {/* Mosque dome SVG animation */}
            <div className="mosque-icon">
                <Image className="size-30" src={loadingIcon} alt="loading" />
            </div>

            {/* Animated dots */}
            <div className="flex gap-2 items-center">
                <span className="bg-secondary dot dot-1" />
                <span className="bg-secondary dot dot-2" />
                <span className="bg-secondary dot dot-3" />
            </div>

            <style>{`
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background-color: #fafffe;
          gap: 24px;
        }

        .mosque-icon {
          animation: float 2.4s ease-in-out infinite;
          filter: drop-shadow(0 4px 16px rgba(45, 106, 79, 0.15));
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .dome-path {
          stroke-dasharray: 120;
          stroke-dashoffset: 120;
          animation: draw 1.4s ease forwards;
        }

        .dome-path-inner {
          stroke-dasharray: 90;
          stroke-dashoffset: 90;
          animation: draw 1.4s ease 0.3s forwards;
        }

        .crescent {
          opacity: 0;
          animation: fadeIn 0.6s ease 1s forwards;
        }

        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        .dots {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .dot {
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          opacity: 0.3;
          animation: pulse 1.2s ease-in-out infinite;
        }

        .dot-1 { animation-delay: 0s; }
        .dot-2 { animation-delay: 0.2s; }
        .dot-3 { animation-delay: 0.4s; }

        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1.1); background-color: #bf7839; }
        }

        @media (prefers-reduced-motion: reduce) {
          .mosque-icon { animation: none; }
          .dome-path { animation: none; stroke-dashoffset: 0; }
          .dome-path-inner { animation: none; stroke-dashoffset: 0; }
          .crescent { animation: none; opacity: 1; }
          .dot { animation: none; opacity: 0.6; }
        }
      `}</style>
        </div>
    );
}
