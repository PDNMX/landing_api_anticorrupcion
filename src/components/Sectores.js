import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

import s1 from '../assets/icono1.svg';
import s2 from '../assets/icono2.svg';
import s3 from '../assets/icono3.svg';
import s4 from '../assets/icono4.svg';
import s5 from '../assets/icono5.svg';
import s6 from '../assets/icono6.svg';

const styles = theme => ({

    icons: {
        width: '80px'
    },
    item: {
        textAlign: 'center'
    },
    chip: {
        background: '#96cb99',
        color: '#fff',
        fontSize: '55px',
        height: '55px',
        width: '55px',
        borderRadius: '50%'
    },
    links:{
        color: '#96cb99'
    }

});

class Sectores extends React.Component {

    render () {
        const {classes } = this.props;

        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Typography variant='display2' style={{color: '#96cb99'}}>
                            {/*<Chip label={6} className={classes.chip}/>*/} Sistemas de la PDN
                        </Typography>
                        <br/>
                        <br/>
                    </Grid>

                    <Grid item xs={4} className={ classes.item }>
                        <img className={classes.icons} src={s1} alt="Sistema 1"/>
                        <Typography variant="subheading">
                            <a href="" className={classes.links}> Declaraciones</a>
                        </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.item}>
                        <img className={classes.icons} src={s2} alt="Sistema 2"/>
                        <Typography variant="subheading">
                            <a href="" className={classes.links}>Servidores públicos que intervienen en contrataciones</a>
                        </Typography>
                    </Grid>
                    <Grid item xs={4} className = {classes.item}>
                        <img className={classes.icons} src={s3} alt="Sistema 3"/>
                        <Typography variant="subheading">
                            <a href="" className={classes.links}>Servidores públicos y particulares sancionados</a>
                        </Typography>
                    </Grid>
                    <Grid item xs={4} className = {classes.item }>
                        <img className={classes.icons} src={s4} alt="Sistema 4"/>
                        <Typography variant="subheading">
                            <a href="" className={classes.links}> Fiscalización</a>
                        </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.item}>
                        <img className={classes.icons} src={s5} alt="Sistema 5"/>
                        <Typography variant="subheading">
                            <a href="" className={classes.links}> Denuncias</a>
                        </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.item }>
                        <img className={classes.icons} src={s6} alt="Sistema 6"/>
                        <Typography variant="subheading">
                            <a href="" className={classes.links}> Contrataciones Públicas </a>
                        </Typography>
                    </Grid>

                </Grid>

            </div>
        )
    }
}

Sectores.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sectores);