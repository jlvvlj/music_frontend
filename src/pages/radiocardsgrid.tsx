import { JSX, SVGProps, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import '../app/globals.css'
import Navbar from './navbar'

const plans = [
    {
        name: 'Startup',
        ram: '12GB',
        cpus: '6 CPUs',
        disk: '160 GB SSD disk',
    },
    {
        name: 'Startup',
        ram: '12GB',
        cpus: '6 CPUs',
        disk: '160 GB SSD disk',
    },
    {
        name: 'Startup',
        ram: '12GB',
        cpus: '6 CPUs',
        disk: '160 GB SSD disk',
    },
    {
        name: 'Startup',
        ram: '12GB',
        cpus: '6 CPUs',
        disk: '160 GB SSD disk',
    }
]

export default function RadioCards() {
    const [selected, setSelected] = useState(plans[0])

    return (
        <>
        <Navbar />
        <div className="w-full px-4 py-32">
            <div className="mx-auto w-full max-w-5xl">
                <RadioGroup value={selected} onChange={setSelected}>
                    <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
                    <div className="grid grid-cols-2 gap-8">
                        {plans.map((plan) => (
                            <RadioGroup.Option
                            key={plan.name}
                            value={plan}
                            className={({ active, checked }) =>
                            `${active
                                ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                                : ''
                            } 
                            ${checked ? 'bg-gray-600 bg-opacity-75 ' : 'bg-gray-300'
                        }
                        text-white relative px-12 py-12 cursor-pointer rounded-lg shadow-md focus:outline-none`
                    }
                    >
                                {({ active, checked }) => (
                                    <>
                                        <div className="text-white only:items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="text-sm">
                                                    <RadioGroup.Label
                                                        as="p"
                                                        className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'
                                                    }`}
                                                    >
                                                        {plan.name}
                                                    </RadioGroup.Label>
                                                    <RadioGroup.Description
                                                        as="span"
                                                        className={`inline ${checked ? 'text-sky-100' : 'text-gray-500'
                                                    }`}
                                                    >
                                                        <span>
                                                            {plan.ram}/{plan.cpus}
                                                        </span>{' '}
                                                        <span aria-hidden="true">&middot;</span>{' '}
                                                        <span>{plan.disk}</span>
                                                    </RadioGroup.Description>
                                                </div>
                                            {checked && (
                                                <div className="ml-32  text-white">
                                                    <CheckIcon className="h-6 w-6" />
                                                </div>
                                            )}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </RadioGroup.Option>
                        ))}
                    </div>
                </RadioGroup>
            </div>
        </div>
</>
    )
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
            <path
                d="M7 13l3 3 7-7"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                />
        </svg>
    )
}
