import BackLink from "@/components/back-link";
import ChantTitle from "@/components/chant-title";
import SettingsDefaultSpeedControl from "@/components/settings-default-speed-control";
import SettingsResetCountersButton from "@/components/settings-reset-counters-button";
import SettingsThemeControl from "@/components/settings-theme-control";
import SettingsTextSizeControl from "@/components/settings-text-size-control";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div className="p-4 flex flex-col gap-6 items-center">
      <BackLink href="/" />
      <ChantTitle>Settings</ChantTitle>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
        </CardHeader>
        <CardContent>
          <SettingsThemeControl />
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Text size</CardTitle>
        </CardHeader>
        <CardContent>
          <SettingsTextSizeControl />
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Default playback speed</CardTitle>
        </CardHeader>
        <CardContent>
          <SettingsDefaultSpeedControl />
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Counters</CardTitle>
        </CardHeader>
        <CardContent>
          <SettingsResetCountersButton />
        </CardContent>
      </Card>
    </div>
  );
}
