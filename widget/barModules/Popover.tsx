import Gtk from "gi://Gtk?version=4.0"
import GLib from "gi://GLib?version=2.0"
import Gio from "gi://Gio?version=2.0"
import { execAsync } from "ags/process"

import Systeminfo from "./Systeminfo.tsx"

export default function Popover() {
  const homeDir = GLib.get_home_dir()
  const customPic = `${GLib.get_current_dir()}/profilepic.png`
  const fallbackIcon = "avatar-default-symbolic"

  const picFile = Gio.File.new_for_path(customPic)
  const picExists = picFile.query_exists(null)

  return (
    <popover class="Submenu">
      <box orientation={Gtk.Orientation.VERTICAL}>
        <box hexpand class="Userinteractions">
          <image
            class="Profile"
            file={picExists ? customPic : ""}
            iconName={picExists ? undefined : fallbackIcon}
            pixelSize={64}
          />
          <label class="User" label={GLib.get_user_name()} />
          <button
            class="Powermenu"
            onClicked={() => execAsync(["wlogout"])}
            vexpand={false}
            valign={Gtk.Align.CENTER}
          >
            <image
              class="Icon"
              iconName="system-shutdown-symbolic"
              pixelSize={32}
            />
          </button>
        </box>
        <Systeminfo />
      </box>
    </popover>
  )
}
