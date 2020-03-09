// https://youmightnotneed.com/lodash/#clamp
export const clamp = (num, lower, upper) => (upper ? Math.min(Math.max(num, lower), upper) : Math.min(num, lower))
