import { Flex, Text } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/system";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import IconBox from "components/Icons/IconBox";
import { Bicycle } from "components/Icons/Icons";
import { ReactComponent as BicycleSvg } from "../../assets/svg/bicycle-trail.svg"
import { useEffect, useState } from "react";
import config from "./config.json"
import GoogleMapReact from 'google-map-react';

export default function StationMap() {
    const iconBoxInside = useColorModeValue("white", "white");

    const [center, setCenter] = useState({
        lat: 24.137288,
        lng: 120.6847364
    })

    const BicycleSataus = ({ percent }) => {

        const [colorHex, setColorHex] = useState('')

        useEffect(() => {
            if (percent < 20) {
                setColorHex('#FEBD58')
            } else if (percent >= 20 && percent < 70) {
                setColorHex('#71D845')
            } else {
                setColorHex('#FE5958')
            }
        }, [percent])

        return (
            <Flex border={'1px solid'} width='50px' height='50px' borderRadius='10px' background={colorHex}>
                <Bicycle
                    style={{ width: '50px', height: '50px' }}
                    color='white'
                />
            </Flex>
        )
    }


    return (
        <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
            <Card>
                <CardHeader style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                    <Text fontSize="40px" mt="3px" color='#008080' textAlign='center'>
                        站點即時單車數量比率
                    </Text>
                </CardHeader>
                <Flex direction='column' style={{ height: '100vh', width: '100%' }}>
                    <Flex margin='5px'>
                        <Flex marginRight='10px' justifyContent='center' alignItems='center'>
                            <BicycleSataus percent={70} />
                            <Text fontSize="20px" color='#008080' textAlign='center' margin='5px'>
                                70%~100%
                            </Text>
                        </Flex>
                        <Flex marginRight='10px' justifyContent='center' alignItems='center'>
                            <BicycleSataus percent={50} />
                            <Text fontSize="20px" color='#008080' textAlign='center' margin='5px'>
                                20%~70%
                            </Text>
                        </Flex>
                        <Flex marginRight='10px' justifyContent='center' alignItems='center'>
                            <BicycleSataus percent={15} />
                            <Text fontSize="20px" color='#008080' textAlign='center' margin='5px'>
                                0%~20%
                            </Text>
                        </Flex>
                    </Flex>
                    {/* <LoadScript
                        googleMapsApiKey={config.googleMapAPIKey}
                    >
                        <GoogleMap
                            mapContainerStyle={{ width: '100%', height: '100vh' }}
                            center={center}
                            zoom={14}
                        >
                            <BicycleStatusMarker lat={24.137288} lng={120.6847364} />
                        </GoogleMap>
                    </LoadScript> */}
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: config.googleMapAPIKey }}
                        defaultCenter={center}
                        defaultZoom={14}
                    >
                        <BicycleSataus
                            lat={24.137288}
                            lng={120.6847364}
                            percent={15}
                        />
                        <BicycleSataus
                            lat={24.123456}
                            lng={120.6952364}
                            percent={50}
                        />
                        <BicycleSataus
                            lat={24.129876}
                            lng={120.6847364}
                            percent={75}
                        />
                    </GoogleMapReact>
                </Flex>
            </Card>
        </Flex>
    )
}