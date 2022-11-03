import React from 'react'
import { Textarea, Button } from '@nextui-org/react';

function insert() {
  return (
    <div>
        <form>
            <Textarea
            bordered
            color="primary"
            labelPlaceholder="Meal Description"
            fullWidth
            minRows={6}
            />
            <Button type='submit'>Submit</Button>
        </form>
    </div>
  )
}

export default insert