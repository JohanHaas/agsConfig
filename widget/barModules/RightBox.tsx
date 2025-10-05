import Battery from "./Battery.tsx"
import NetworkIcon from "./NetworkIcon.tsx"

export default function RightBox() {
  return (
    <button class="RightBox" onClicked={(self) => {}}>
      <box>
        <NetworkIcon />
        <Battery />
        <label class="Options" label="☰" />
      </box>
    </button>
  )
}
