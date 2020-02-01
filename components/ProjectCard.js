import styled from 'styled-components'

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #A1B9BF;
    color: #A1B9BF;
    margin: 0 1em;
    padding: 0.25em 1em;
    font: inherit;
`

const ProjectCard = () => (
    <div>
        <Button>Normal</Button>
    </div>
)

export default ProjectCard