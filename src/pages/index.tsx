import type { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import { Button, Container, Row, Table } from 'react-bootstrap'
import styles from '../../styles/Home.module.css'
import api from '../service/api'

type Employee = {
  id: number
  firstName: string
  lastName: string
  contact: string
  document: string
}

const Home: NextPage = () => {
  const [listEmployees, setListEmployees] = useState<Employee[] | null>()

  useEffect(() => {
    setListEmployees([
      {
        id: 0,
        firstName: 'Gabriel',
        lastName: 'Valin',
        contact: 'mail@mail.com',
        document: 'CPF'
      },
      {
        id: 1,
        firstName: 'Gabriel 1',
        lastName: 'Valin 1 ',
        contact: 'mail1@mail.com',
        document: 'CPF'
      },
      {
        id: 2,
        firstName: 'Gabriel 2',
        lastName: 'Valin 2',
        contact: 'mail2@mail.com',
        document: 'CPF'
      },
      {
        id: 3,
        firstName: 'Gabriel 3',
        lastName: 'Valin 3',
        contact: 'mail3@mail.com',
        document: 'CPF'
      },
      {
        id: 4,
        firstName: 'Gabriel 4',
        lastName: 'Valin 4',
        contact: 'mail4@mail.com',
        document: 'CPF'
      }
    ])
  }, [])

  const sendEmployees = async () => {
    const response = await api.post('create-excel', {
      listEmployee: listEmployees
    })

    return response
  }

  return (
    <div className={styles.container}>
      <Row>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th className={styles.td}>First Name</th>
              <th className={styles.td}>Last Name</th>
              <th className={styles.td}>Contact</th>
              <th className={styles.td}>Document</th>
            </tr>
          </thead>
          <tbody>
            {listEmployees?.map((employee) => {
              return (
              <tr key={employee.id}>
                <td className={styles.td}><span>{employee.firstName}</span></td>
                <td className={styles.td}>{employee.lastName}</td>
                <td className={styles.lastTD}>{employee.contact}</td>
                <td className={styles.td}>{employee.document}</td>           
              </tr>
              )
            }) }
          </tbody>
        </Table>
      </Row>
      
      <Button variant='primary' onClick={() => sendEmployees()} className={styles.export}>Export XLSX</Button>
    </div>
  )
}

export default Home
