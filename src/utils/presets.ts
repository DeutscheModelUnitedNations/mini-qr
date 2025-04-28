import PLACEHOLDER_IMAGE_URL from '@/assets/placeholder_image.png'
import DMUNPreset from '@/assets/presets/dmun.json'
import MunshPreset from '@/assets/presets/mun-sh.json'
import MunbwPreset from '@/assets/presets/munbw.json'
import PlainConfig from '@/assets/presets/plain.json'
import type { DrawType, Options as StyledQRCodeProps } from 'qr-code-styling'

export interface CustomStyleProps {
  borderRadius?: string
  background?: string
}

export type PresetAttributes = {
  style: CustomStyleProps
  name: string
}

export type Preset = Omit<
  Required<StyledQRCodeProps>,
  'shape' | 'qrOptions' | 'nodeCanvas' | 'jsdom'
> &
  PresetAttributes

const defaultPresetOptions = {
  backgroundOptions: {
    color: 'transparent'
  },
  imageOptions: {
    margin: 0
  },
  width: 200,
  height: 200,
  margin: 0,
  type: 'svg' as DrawType
}

export const dmunPreset: Preset = {
  ...defaultPresetOptions,
  name: 'DMUN',
  ...DMUNPreset.props,
  style: DMUNPreset.style,
}

export const munshPreset: Preset = {
  ...defaultPresetOptions,
  name: 'MUN-SH',
  ...MunshPreset.props,
  style: MunshPreset.style,
}

export const munbwPreset: Preset = {
  ...defaultPresetOptions,
  name: 'MUNBW',
  ...MunbwPreset.props,
  style: MunbwPreset.style,
}

export const plainPreset = {
  ...defaultPresetOptions,
  name: 'Plain',
  ...PlainConfig.props,
  style: PlainConfig.style
} as Preset


export const allPresets: Preset[] = [
  plainPreset,
  ...[
    dmunPreset,
    munshPreset,
    munbwPreset,
  ].sort((a, b) => a.name.localeCompare(b.name))
]
