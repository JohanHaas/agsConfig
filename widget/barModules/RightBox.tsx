import AstalBattery from "gi://AstalBattery"
import { For, With, createBinding, onCleanup } from "ags"

export default function RightBox() {
  const battery = AstalBattery.get_default()

  const percent = createBinding(
    battery,
    "percentage",
  )((p) => `${Math.floor(p * 100)}%`)

  return (
    <button class="RightBox" onClicked={(self) => {}}>
      <box>
        <label class="Battery" label={percent} />
        <label class="Options" label="☰" />
      </box>
    </button>
  )
}
