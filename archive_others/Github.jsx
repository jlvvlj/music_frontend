import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import '../app/globals.css'

import DemoGithub from "../src/components/cards/github-card"


export default function Github(props) {
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
            <DemoGithub>
            </DemoGithub>
        </div>
    );
}