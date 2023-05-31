import React, {useEffect, useRef, useState} from "react";
import {Button, Card, Form} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";

import Loading from "../components/Loading";
import ServerConnect from "../utils/serverConnect"
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRadio,
    MDBRow
} from 'mdb-react-ui-kit';
import * as PropTypes from "prop-types";

function MDBSelect(props) {
    return null;
}

MDBSelect.propTypes = {
    size: PropTypes.string,
    data: PropTypes.any,
    className: PropTypes.string
};
const Post = (props) => {
    const navigate = useNavigate();
    const [hero, setHero] = useState({})
    const [newHero, setNewHero] = useState({
        _id: "none",
        nickName: "",
        realName: "",
        originalDescription: "",
        superPowers: "",
        catchPhrase: "",
        imageURL: "https://feeds.abplive.com/onecms/images/uploaded-images/2023/04/19/48b48e1598a8042b0b13a6956de1fd8f1681887904414597_original.jpg?impolicy=abp_cdn&imwidth=650"
    })


    const [isLoading, setLoading] = useState(true)
    const buttonRef = useRef(null);
    const [isReady, setReady] = useState(false)
    const id = useParams().id

    useEffect(() => {
        const getOneHero = async () => {
            const response = await props.getOneHero.bind(ServerConnect)(id)
            setHero(response);
            setLoading(false)
            if (response === undefined) {
                setReady(true)
            }
            setNewHero({...newHero, _id: response._id})

        }
        getOneHero()
    }, [props.test, ServerConnect, id])


    return (
        <div style={{paddingTop: "60px"}}>
            {isLoading ? (<Loading/>) : isReady ? (
                <h1 className={"d-flex justify-content-center m-5"}>Add post</h1>) : (


                <MDBContainer fluid className='bg-dark'>

                    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                        <MDBCol>

                            <MDBCard className='my-4'>

                                <MDBRow className='g-0'>

                                    <MDBCol md='6' className="d-none d-md-block">
                                        <Card>
                                            <Card.Img variant="top" src={hero.imageURL}/>
                                        </Card>
                                    </MDBCol>

                                    <MDBCol md='6'>

                                        <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                                            <h3 className="mb-5 text-uppercase fw-bold">Hero information</h3>

                                            <MDBRow>

                                                <MDBCol md='6'>
                                                    <MDBInput wrapperClass='mb-4' onChange={(event
                                                    ) => {
                                                        setNewHero({...newHero, nickName: event.target.value})
                                                    }} label='Nick Name' size='lg'
                                                              id='nickname' defaultValue={hero?.nickName} type='text'/>
                                                </MDBCol>

                                                <MDBCol md='6'>
                                                    <MDBInput wrapperClass='mb-4' onChange={(event
                                                    ) => {
                                                        setNewHero({...newHero, realName: event.target.value})
                                                    }} label='Real Name' size='lg'
                                                              id='real_name' defaultValue={hero?.realName}
                                                              type='text'/>
                                                </MDBCol>

                                            </MDBRow>

                                            <MDBInput wrapperClass='mb-4' onChange={(event
                                            ) => {
                                                setNewHero({...newHero, originalDescription: event.target.value})
                                            }} label='Description' size='lg'
                                                      id='origin_description' defaultValue={hero?.originalDescription}
                                                      type='text'/>

                                            <MDBInput wrapperClass='mb-4' onChange={(event
                                            ) => {
                                                setNewHero({...newHero, superPowers: event.target.value})
                                            }} label='Super Power' size='lg' defaultValue={hero?.superPowers}
                                                      id='superpowers'
                                                      type='text'/>

                                            <MDBInput wrapperClass='mb-4' onChange={(event
                                            ) => {
                                                setNewHero({...newHero, catchPhrase: event.target.value})
                                            }} label='Catch Phrase' size='lg'
                                                      id='catch_phrase' defaultValue={hero?.catchPhrase} type='text'/>

                                            <MDBInput wrapperClass='mb-4' onChange={(event
                                            ) => {
                                                setNewHero({...newHero, catchPhrase: event.target.value})
                                            }} label='Image Hero' size='lg' onChange={(event
                                            ) => {
                                                setNewHero({...newHero, imageURL: event.target.value})
                                                setHero({...hero, imageURL: event.target.value})
                                            }}
                                                      id='Image'
                                                      defaultValue={hero._id === "none" ? "" : hero?.imageURL}
                                                      type='text'/>

                                            <div className="d-flex justify-content-center pt-3">
                                                <Button variant="warning" ref={buttonRef} onClick={(event) => {
                                                    props.saveOrUpdateHero.bind(ServerConnect)( newHero)
                                                    navigate('/');
                                                }}>Save</Button>
                                            </div>

                                        </MDBCardBody>

                                    </MDBCol>
                                </MDBRow>

                            </MDBCard>

                        </MDBCol>
                    </MDBRow>

                </MDBContainer>


            )}
        </div>
    )
}
export default Post


