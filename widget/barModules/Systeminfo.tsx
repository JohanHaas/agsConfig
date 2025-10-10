import GObject, { register, property, signal } from "gnim/gobject"
import { execAsync } from "ags/process"

import GLib from "gi://GLib"
import Gio from "gi://Gio"
import { createPoll } from "ags/time"
import { monitorFile } from "ags/file"
import { createBinding } from "gnim"

export default function Systeminfo() {
  const mem = createPoll("", 1000, getMem)

  return (
    <box class="SysteminfoCard">
      <box class="Cpu">
        <image class="CpuIcon" iconName="cpu-symbolic" />
        <label label="" />
      </box>
    </box>
  )
}

const decoder = new TextDecoder("utf-8")

function decode(contents: Uint8Array): string {
  return decoder.decode(contents)
}

const memFile = Gio.File.new_for_path("/proc/meminfo")

function getMem() {
  let [, contents] = memFile.load_contents(null)

  let lines = decode(contents).split("\n")
  let totalMem = parseInt(lines[0].split(":")[1].split(/\s+/)[1])
  let availableMem = parseInt(lines[2].split(":")[1].split(/\s+/)[1])
  return `${Math.round((100 * (totalMem - availableMem)) / totalMem)}% `
}
