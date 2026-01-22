import { twMerge } from 'tailwind-merge';
import assert from 'node:assert';

assert(
  twMerge('bg-transparent', 'rounded-[3px]') === //
    'bg-transparent rounded-[3px]'
);

assert(
  twMerge('bg-transparent', 'rounded-[3px]', 'border-[#bf4f74]', 'text-[#bf4f74]') === //
    'bg-transparent rounded-[3px] border-[#bf4f74] text-[#bf4f74]'
);

assert(
  twMerge('bg-transparent rounded-[3px]') === //
    'bg-transparent rounded-[3px]'
);

assert(
  twMerge('bg-transparent', 'rounded-[3px]', 'border-[#bf4f74] text-[#bf4f74]') === //
    'bg-transparent rounded-[3px] border-[#bf4f74] text-[#bf4f74]'
);

// 중복 되었다면, 가장 마지막에 등장한 클래스만 남기고 나머지 제거
// ✨ bg-계열에서 마지막
assert(
  twMerge('bg-red-500 bg-blue-500') === //
    'bg-blue-500'
);

// ✨ text-계열은 중복없으니 그대로 출력 bg-계열에서 마지막 출력
assert(
  twMerge('bg-red-500 bg-blue-500', 'text-white bg-rose-500') === //
    'text-white bg-rose-500'
);
