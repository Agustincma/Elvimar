import UserFormGeneralData from '@/components/forms/UserFormGeneralData'
import ExpandableSectionComponent from '@/components/selection/UserFormGeneralData'
import GeneralLayout from '@/layouts/GeneralLayout'
import React from 'react'

export const TaskPage = () => {
  return (
    <>
      <GeneralLayout>
        <ExpandableSectionComponent title={'Formulario 1'}>
          <UserFormGeneralData />
        </ExpandableSectionComponent>
        <ExpandableSectionComponent title={'Formulario 2'}>
          <UserFormGeneralData />
        </ExpandableSectionComponent>
        <ExpandableSectionComponent title={'Formulario 3'}>
          <UserFormGeneralData />
        </ExpandableSectionComponent>
        <ExpandableSectionComponent title={'Formulario 4'}>
          <UserFormGeneralData />
        </ExpandableSectionComponent>
      </GeneralLayout>
    </>
  )
}
export default TaskPage