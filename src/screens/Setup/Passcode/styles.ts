import { StyleSheet } from 'react-native';

import { AppSizes } from '@theme';

const styles = StyleSheet.create({
    logo: {
        width: AppSizes.screen.width * 0.4,
        height: AppSizes.screen.height * 0.1,
        resizeMode: 'contain',
    },

    IconChevronLeft: {
        marginLeft: 4,
        width: AppSizes.screen.width * 0.09,
        height: AppSizes.screen.width * 0.09,
        resizeMode: 'contain',
    },
});

export default styles;
