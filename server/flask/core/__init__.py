from flask import Flask
from werkzeug.middleware.proxy_fix import ProxyFix
from config import Setting

from .extensions import api, db, ServerMigrate
from .urls import urlpatterns



def create_app(setting: Setting) -> Flask:
    """
        Factory Function For creating FlaskApp
    """
    app = Flask(__name__,)


    app.config.from_object(setting)

    db.init_app(app=app)  # db
    ServerMigrate.init_app(db=extensions.db, app=app)  # migrate
    api.init_app(app=app)

    for each in urlpatterns:
        api.register_blueprint(each["obj"], url_prefix=each["url_prefix"])

    app.wsgi_app = ProxyFix(  # tell flask in behind a reverse proxy
        app.wsgi_app, x_for=1, x_proto=1, x_host=1, x_prefix=1
    )
    return app


app = create_app(Setting)

