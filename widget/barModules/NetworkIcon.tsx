import Network from "gi://AstalNetwork"
import { createBinding } from "gnim"
import { execAsync } from "ags/process"
import { For, With, createBinding, onCleanup } from "ags"

export default function NetworkIcon() {
  const network = Network.get_default()
  const wifi = createBinding(network, "wifi")

  return (
    <With value={wifi}>
      {(wifi) =>
        wifi && (
          <image class="Wifi" iconName={createBinding(wifi, "iconName")} />
        )
      }
    </With>
  )
}
