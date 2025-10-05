import AstalBattery from "gi://AstalBattery"
import { For, With, createBinding, onCleanup } from "ags"

export default function Battery() {
  const battery = AstalBattery.get_default()

  const percent = createBinding(
    battery,
    "percentage",
  )((p) => `${Math.floor(p * 100)}%`)

  const warning = createBinding(
    battery,
    "percentage",
  )((p) => {
    const percentage = Math.floor(p * 100)
    if (percentage <= 15) {
      return "Critical Battery"
    } else if (percentage <= 30) {
      return "Warning Battery"
    } else {
      return "Fine Battery"
    }
  })

  return (
    <box class={warning} visible={createBinding(battery, "isPresent")}>
      <label class="Percentage" label={percent} />
      <image class="Icon" iconName={createBinding(battery, "iconName")} />
    </box>
  )
}
