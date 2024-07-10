# flask extensions

from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_smorest import Api


api = Api()
db = SQLAlchemy()
ServerMigrate = Migrate()
