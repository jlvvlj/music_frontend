import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons"

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "First Album",
    label: "First Album",
  },
  {
    value: "Second Album",
    label: "Second Album",
  },
]

export const statuses = [
  {
    value: "processing",
    label: "Processing",

    icon: QuestionMarkCircledIcon,
  },
  {
    value: "upload",
    label: "Uploading",
    icon: CircleIcon,
  },
  {
    value: "live",
    label: "Live",
    icon: StopwatchIcon,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircledIcon,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CrossCircledIcon,
  },
]

export const priorities = [
  {
    label: "Decreasing",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Stable",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "Growing",
    value: "high",
    icon: ArrowUpIcon,
  },
]
