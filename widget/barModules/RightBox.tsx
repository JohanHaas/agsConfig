import Battery from "./Battery.tsx"
import NetworkIcon from "./NetworkIcon.tsx"
import Gtk from "gi://Gtk?version=4.0"
import Popover from "./Popover.tsx"
import { createBinding } from "gnim"

export default function RightBox() {
  return (
    <menubutton class="RightBox">
      <box>
        <NetworkIcon />
        <Battery />
        <label class="Options" label="☰" />
      </box>
      <Popover />
    </menubutton>
  )
}
