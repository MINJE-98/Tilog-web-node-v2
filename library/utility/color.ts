import { Posts } from "@Api/interface/model";

const DECIMAL_COLOR_RANGE = 16777215;

function getDecimalColor(value: number) {
  return Math.floor(Math.abs(Math.sin(value) * DECIMAL_COLOR_RANGE));
}

export function getColorHex(postId: Posts["id"]) {
  const decimalColor = getDecimalColor(parseInt(postId, 10));
  const colorHex = decimalColor.toString(16).padEnd(6, "0");
  return colorHex;
}

export function getColorRGB(postId: Posts["id"]) {
  const decimalColor = getDecimalColor(parseInt(postId, 10));
  const r = Math.floor(decimalColor / (256 * 256));
  const g = Math.floor(decimalColor / 256) % 256;
  const b = decimalColor % 256;
  return { r, g, b };
}

export function backgroundColor(postId: Posts["id"]) {
  const colorHex = getColorHex(postId);
  return `#${colorHex}`;
}

export function getBrightness(postId: Posts["id"]) {
  const { r, g, b } = getColorRGB(postId);
  return (r * 299 + g * 587 + b * 114) / 1000 > 128;
}
