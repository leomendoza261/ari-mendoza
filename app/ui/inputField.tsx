import React from "react";

// Subcomponente para manejar un input específico
export const InputField = React.memo(({ value, onChange }) => {
    return (
        <div className="field-container">
            <input
                value={value}
                onChange={onChange}
                className="input-class"
            />
        </div>
    );
});
