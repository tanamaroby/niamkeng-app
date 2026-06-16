export type TextSize = "small" | "medium" | "large";

export const TEXT_SIZE_KEY = "fbc-text-size";
export const PLAYBACK_SPEED_KEY = "fbc-default-speed";

export const DEFAULT_TEXT_SIZE: TextSize = "medium";
export const DEFAULT_PLAYBACK_SPEED = 1.0;
export const PLAYBACK_SPEEDS = [0.5, 0.75, 1.0, 1.25, 1.5, 2.0];

export const COUNTER_RESET_CHANNEL = "fbc-counter-reset";

function readLocalStorage(key: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeLocalStorage(key: string, value: string) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // localStorage unavailable (private mode, quota) — preference just won't persist
  }
}

export function readTextSize(): TextSize {
  const value = readLocalStorage(TEXT_SIZE_KEY);
  return value === "small" || value === "medium" || value === "large"
    ? value
    : DEFAULT_TEXT_SIZE;
}

export function writeTextSize(size: TextSize) {
  writeLocalStorage(TEXT_SIZE_KEY, size);
}

export function readDefaultPlaybackSpeed(): number {
  const value = readLocalStorage(PLAYBACK_SPEED_KEY);
  const parsed = value ? parseFloat(value) : NaN;
  return PLAYBACK_SPEEDS.includes(parsed) ? parsed : DEFAULT_PLAYBACK_SPEED;
}

export function writeDefaultPlaybackSpeed(speed: number) {
  writeLocalStorage(PLAYBACK_SPEED_KEY, speed.toString());
}
