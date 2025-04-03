import { Controller, FieldValues } from 'react-hook-form';
import { Editor } from '@monaco-editor/react';
import { ErrorText } from '@shared/ui';
import { EditorFieldProps } from './editor-field.types';

export const EditorField = <T extends FieldValues>({
  control,
  name,
  lang,
  error,
  helperText,
  trigger,
}: EditorFieldProps<T>) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Editor
            height="300px"
            language={lang.toLowerCase()}
            theme="vs-dark"
            value={field.value}
            onChange={(value) => {
              field.onChange(value || '');
              trigger(name);
            }}
          />
        )}
      />
      {error && <ErrorText text={helperText || ''} />}
    </>
  );
};
