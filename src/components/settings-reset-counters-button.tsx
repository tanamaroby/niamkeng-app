"use client";

import { Button } from "@/components/ui/button";
import { ALL_COUNTER_COOKIE_KEYS } from "@/lib/constants";
import { COUNTER_RESET_CHANNEL } from "@/lib/preferences";
import Cookies from "js-cookie";

const SettingsResetCountersButton = () => {
  const handleReset = () => {
    if (
      !window.confirm(
        "Reset all chant counters to zero? This can't be undone."
      )
    ) {
      return;
    }
    ALL_COUNTER_COOKIE_KEYS.forEach((key) => Cookies.remove(key));
    new BroadcastChannel(COUNTER_RESET_CHANNEL).postMessage("reset");
  };

  return (
    <Button variant="destructive" onClick={handleReset} className="w-full">
      Reset all counters
    </Button>
  );
};

export default SettingsResetCountersButton;
