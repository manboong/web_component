import React, { useState, useEffect, useId } from "react";
interface LongPressEnablerProps {
    doPropagate: boolean;
    children: React.ReactElement;
    onLongPress?: React.MouseEventHandler;
}

const LongPress = (props: LongPressEnablerProps) => {
    const [pressTimer, setPressTimer] = useState<NodeJS.Timeout | null>(null);
    const id = useId();
    const [eventCaptureHandler, setEventCaptureHandler] =
        useState<
            React.EventHandler<
                React.MouseEvent | React.TouchEvent | React.ChangeEvent
            >
        >();

    useEffect(() => {
        if (props.doPropagate === false) {
            setEventCaptureHandler(
                (
                    e: React.MouseEvent | React.TouchEvent | React.ChangeEvent,
                ) => {
                    console.log(e);
                    e?.stopPropagation();
                },
            );
        }
    }, []);

    const handleMouseDown: React.MouseEventHandler = (e) => {
        const timer = setTimeout(() => {
            console.log(e);
            props.onLongPress?.(e);
        }, 1000);
        setPressTimer(timer);
    };

    const handleMouseUp: React.MouseEventHandler = (e) => {
        if (pressTimer) {
            clearTimeout(pressTimer);
            setPressTimer(null);
        }
    };

    return (
        <>
            <label
                onMouseDownCapture={eventCaptureHandler}
                onMouseUpCapture={eventCaptureHandler}
                onClickCapture={eventCaptureHandler}
                onTouchStartCapture={eventCaptureHandler}
                onTouchEnd={eventCaptureHandler}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                htmlFor={id}
            >
                {props.children}
            </label>
            <input id={id} type="hidden" />
        </>
    );
};

export { LongPress };
export type { LongPressEnablerProps };
