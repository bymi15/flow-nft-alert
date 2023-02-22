import { twMerge } from 'tailwind-merge';

export default function FlowIcon({ className }) {
  return (
    <span className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={twMerge('w-4 h-4 fill-current', className)}
        viewBox="0 0 17 17"
        fill="none"
      >
        <circle cx="8.4" cy="8.4" r="8.4" fill="#6BE590" />
        <path d="M11.8235 6.47266H9.47021V8.78759H11.8235V6.47266Z" fill="white" />
        <path
          d="M7.11833 9.65486C7.11833 9.82672 7.06653 9.99472 6.96946 10.1376C6.8724 10.2805 6.73444 10.3919 6.57304 10.4576C6.41163 10.5234 6.23402 10.5406 6.06267 10.5071C5.89132 10.4736 5.73393 10.3908 5.61039 10.2693C5.48685 10.1478 5.40272 9.99294 5.36864 9.82438C5.33456 9.65583 5.35205 9.48112 5.41891 9.32234C5.48576 9.16357 5.59898 9.02786 5.74425 8.93239C5.88951 8.83691 6.06029 8.78595 6.235 8.78595H7.11833V6.47266H6.235C5.59518 6.47266 4.96972 6.65929 4.43773 7.00896C3.90574 7.35862 3.4911 7.85561 3.24625 8.43709C3.0014 9.01856 2.93734 9.65839 3.06216 10.2757C3.18698 10.893 3.49509 11.46 3.94751 11.905C4.39993 12.3501 4.97636 12.6531 5.60388 12.7759C6.23141 12.8987 6.88186 12.8357 7.47298 12.5948C8.0641 12.354 8.56934 11.9461 8.9248 11.4228C9.28027 10.8995 9.47 10.2842 9.47 9.65486V8.78595H7.11833V9.65486Z"
          fill="white"
        />
        <path
          d="M10.3532 5.31493H12.9998V3H10.3532C9.49546 3.00087 8.67314 3.33641 8.06665 3.93301C7.46016 4.5296 7.11905 5.3385 7.11816 6.18221V6.47239H9.46983V6.18221C9.47027 5.95204 9.56353 5.73145 9.72914 5.56885C9.89475 5.40625 10.1192 5.31493 10.3532 5.31493Z"
          fill="white"
        />
        <path d="M7.11816 8.78595H9.46983V6.47266H7.11816V8.78595Z" fill="#6BE590" />
      </svg>
    </span>
  );
}
