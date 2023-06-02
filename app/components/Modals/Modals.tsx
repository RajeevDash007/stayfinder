'use client';
import React, { useCallback, useEffect, useState } from 'react'
interface ModalsProps{
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void
    title?: string;
    body?: React.ReactElement;
    footer?:React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryLabel?: string;
}

const Modals: React.FC<ModalsProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryLabel
}) => {
    const [showModals, setShowModals] = useState(isOpen);

    useEffect(()=>{
        setShowModals(isOpen);
    },[isOpen]);

    const handleClose = useCallback(()=>{
        if(disabled){
            return;
        }
        setShowModals(false);
        setTimeout(()=>{
            onClose();
        },300)
    },[disabled, onClose]);

    const handleSubmit = useCallback(()=>{
        if(disabled){
            return;
        }
        onSubmit();
    },[disabled, onSubmit]);
  return (
    <div>
      
    </div>
  )
}

export default Modals
