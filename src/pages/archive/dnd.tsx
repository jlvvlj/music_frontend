'use client'

import '../app/globals.css'


import React, { useState } from 'react';

import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';

import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
    arraySwap,
    rectSwappingStrategy
} from '@dnd-kit/sortable';

import DatePicker from './DatePicker';
import Github from './Github'

export default function Home() {
    const [items, setItems] = useState([1, 2, 3, 4]);
    const background = ['bg-slate-400', 'bg-cyan-400', 'bg-blue-400', 'bg-cyan-800', 'bg-blue-800', 'bg-purple-400', 'bg-cyan-500', 'bg-blue-500', 'bg-cyan-600', 'bg-green-400', 'bg-purple-700', 'bg-green-700', 'bg-red-300']
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    return (
        <div className='w-full bg-slate-300 grid grid-cols-2 gap-4' >
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext items={items} strategy={rectSwappingStrategy}>
                    {items.map(id =>

                        <DatePicker
                            className="bg-blue-400" key={id} id={id}
                            activationConstraint={{ distance: 20 }}
                        />)}
                </SortableContext>
            </DndContext>
        </div >
    );

    function handleDragEnd(event: { active: any; over: any; }) {
        const { active, over } = event;

        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.indexOf(active.id);
                const newIndex = items.indexOf(over.id);
                return arraySwap(items, oldIndex, newIndex)
            });
        }
    }
}
