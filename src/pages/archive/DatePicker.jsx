import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import '../app/globals.css'

import DemoDatePicker from "../../components/cards/date-picker"


export default function DatePicker(props) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: props.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
    return (
        <div
            ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <DemoDatePicker>
            </DemoDatePicker>
        </div>
    );
}